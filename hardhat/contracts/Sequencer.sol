//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import {ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperToken.sol";
import {ISuperfluid} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Sequencer is Ownable {
    using SuperTokenV1Library for ISuperToken;

    //Pool Information
    struct Pool {
        address poolAddress;
        address depositToken;
        address superToken;
    }

    //all pools
    Pool[] public pools;

    //mapping of address of pool to the array of address of depositors in pool
    //mark address as address(0) if stream is stopped
    mapping(address => address[]) public depositorInPool;

    //mapping to check if pool exist or not
    mapping(address => bool) public isPoolExist;

    constructor(
        address[] memory _poolAddress,
        address[] memory _depositToken,
        address[] memory _superToken
    ) {
        for (uint i = 0; i < _poolAddress.length; i++) {
            pools.push(Pool(_poolAddress[i], _depositToken[i], _superToken[i]));

            isPoolExist[_poolAddress[i]] = true;
        }
    }

    //getter function to get pool from pool address
    function getPoolFromPoolAddress(
        address _pool
    ) external view returns (Pool memory) {
        for (uint i = 0; i < pools.length; i++) {
            if (pools[i].poolAddress == _pool) {
                return pools[i];
            }
        }
    }

    //getter function to get all the pools
    function getPools() external view returns (Pool[] memory) {
        return pools;
    }

    //adds a new pool to the pools array
    function addPool(
        address _poolAddress,
        address _depositToken,
        address _superToken
    ) external onlyOwner {
        pools.push(Pool(_poolAddress, _depositToken, _superToken));
        isPoolExist[_poolAddress] = true;
    }

    //adds a depositor to the specific pool
    function addDepositor(
        address _depositor,
        address _poolAddress
    ) external onlyOwner {
        require(isPoolExist[_poolAddress], "Pool does not exist");

        for (uint i = 0; i < depositorInPool[_poolAddress].length; i++) {
            if (depositorInPool[_poolAddress][i] == _depositor) {
                revert("User already exist in pool");
            }
        }

        depositorInPool[_poolAddress].push(_depositor);
    }

    //downgrades the super token to erc20 underlying token and total amount downgraded is token streamed in 1 days
    function downgradeToken(
        address _sender,
        address _superToken
    ) internal returns (uint256) {
        (
            uint256 lastUpdated,
            int96 flowRate,
            uint256 deposit,
            uint256 owedDeposit
        ) = ISuperToken(_superToken).getFlowInfo(_sender, address(this));

        uint256 amountToDowngrade = uint256(uint96(flowRate * 86000));

        ISuperToken(_superToken).downgrade(amountToDowngrade);

        return amountToDowngrade;
    }

    function depositToPool(
        address _poolAddress,
        address _depositToken,
        address _sender,
        uint256 _amount
    ) internal {
        IERC20(_depositToken).transfer(_sender, _amount);
        (bool success, bytes memory data) = _poolAddress.call{value: 0}(
            abi.encodeWithSignature(
                "deposit(uint256, address)",
                _amount,
                _sender
            )
        );

        require(success, "Function call failed");
    }

    function depositToPoolForAll() external {
        for (uint i = 0; i < pools.length; i++) {
            address[] memory depositors = depositorInPool[pools[i].poolAddress];

            for (uint j = 0; j < depositors.length; j++) {
                if (depositors[j] == address(0)) {
                    continue;
                }

                uint downgradedAmount = downgradeToken(
                    depositors[j],
                    pools[i].superToken
                );

                depositToPool(
                    pools[i].poolAddress,
                    pools[i].superToken,
                    depositors[j],
                    downgradedAmount
                );
            }
        }
    }

    function removeDepositor(address _sender, address _pool) external {
        for (uint i = 0; i < depositorInPool[_pool].length; i++) {
            if (depositorInPool[_pool][i] == _sender) {
                require(_sender == msg.sender, "You are not the depositor");
                depositorInPool[_pool][i] = address(0);
            }
        }
    }
}
