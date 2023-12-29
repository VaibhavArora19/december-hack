//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import {ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperToken.sol";
import {ISuperfluid} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// Superfluid widget doesn't work with the super tokens that are not listed
// so we take a stream of super token convert them to their underlying address
// lock that token in our smart contract
// and deposit the token that is included in pool together based on 1:1 pegging of both tokens

contract Sequencer is Ownable {
    using SuperTokenV1Library for ISuperToken;

    struct Deposit {
        address poolAddress;
        address underlyingTokenAddress;
        address depositor;
        address superTokenAddress;
        uint streamStartedAt;
        uint tokensInvestedAt;
        bool isOngoing;
    }

    Deposit[] public deposits;

    mapping(address => Deposit[]) public depositByPoolAddress;

    mapping(address => Deposit[]) public depositByDepositor;

    function newDeposit(
        address _poolAddress,
        address _underlyingToken,
        address _depositor,
        address _superToken
    ) external {
        Deposit memory deposit = Deposit(
            _poolAddress,
            _underlyingToken,
            _depositor,
            _superToken,
            block.timestamp,
            0,
            true
        );

        deposits.push(deposit);

        depositByPoolAddress[_poolAddress].push(deposit);
        depositByDepositor[_depositor].push(deposit);
    }

    function getAllDepositsByDepositor(
        address _depositor
    ) external view returns (Deposit[] memory) {
        return depositByDepositor[_depositor];
    }

    function getAllDepositByPoolAddress(
        address _pool
    ) external view returns (Deposit[] memory) {
        return depositByPoolAddress[_pool];
    }

    function stopDepositing(address _pool, address _depositor) external {
        require(msg.sender == _depositor, "You are not depositor");

        for (uint i = 0; i < deposits.length; i++) {
            if (
                deposits[i].poolAddress == _pool &&
                deposits[i].depositor == _depositor
            ) {
                deposits[i].isOngoing = false;
                depositByPoolAddress[_pool][i].isOngoing = false;
                depositByDepositor[_depositor][i].isOngoing = false;
            }
        }
    }

    function getSpecificDeposit(
        address _pool,
        address _depositor
    ) external view returns (Deposit memory) {
        for (uint i = 0; i < deposits.length; i++) {
            if (
                deposits[i].poolAddress == _pool &&
                deposits[i].depositor == _depositor
            ) {
                return deposits[i];
            }
        }
    }

    /**
     * * downgrades the currently deposited tokens
     */
    function downgradeToken(uint _index) internal returns (uint) {
        Deposit memory depositDetails = deposits[_index];

        (
            uint256 lastUpdated,
            int96 flowRate,
            uint256 deposit,
            uint256 owedDeposit
        ) = ISuperToken(depositDetails.superTokenAddress).getFlowInfo(
                depositDetails.depositor,
                address(this)
            );

        uint timeFromLastDeposit;

        if (depositDetails.tokensInvestedAt == 0) {
            timeFromLastDeposit =
                block.timestamp -
                depositDetails.streamStartedAt; //get the total amount of tokens to downgrade
        } else {
            timeFromLastDeposit =
                block.timestamp -
                depositDetails.tokensInvestedAt;
        }

        uint tokenToDowngrade = timeFromLastDeposit *
            uint256(uint96(flowRate)) -
            1000; //1000 is the buffer

        ISuperToken(depositDetails.superTokenAddress).downgrade(
            tokenToDowngrade
        );

        return tokenToDowngrade;
    }

    function depositAllStreamToPool() external {
        for (uint i = 0; i < deposits.length; i++) {
            if (deposits[i].isOngoing == true) {
                uint tokenToDowngrade = downgradeToken(i);

                deposits[i].tokensInvestedAt = block.timestamp;
                depositByPoolAddress[deposits[i].poolAddress][i]
                    .tokensInvestedAt = block.timestamp;
                depositByDepositor[deposits[i].depositor][i]
                    .tokensInvestedAt = block.timestamp;

                IERC20(deposits[i].underlyingTokenAddress).transfer(
                    deposits[i].depositor,
                    tokenToDowngrade
                );

                (bool success, bytes memory data) = deposits[i]
                    .poolAddress
                    .call{value: 0}(
                    abi.encodeWithSignature(
                        "deposit(uint256, address)",
                        tokenToDowngrade,
                        deposits[i].depositor
                    )
                );
            }
        }
    }
}
