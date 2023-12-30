"use client";

import PoolTogetherInfo from "../PoolTogether/PoolTogetherInfo";
import AmountStreamed from "../Superfluid/AmountStreamed";
import TxDetails from "../Superfluid/TxDetails";
import StreamButton from "../UI/StreamButton";
import { usePathname } from "next/navigation";
import {
  ERC20ABI,
  SMART_CONTRACT_ABI,
  VAULT_ABI,
  Vaults,
  smartContractAddress,
} from "@/constants";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Framework } from "@superfluid-finance/sdk-core";
import { useAccount } from "wagmi";

const PoolDetails = () => {
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [allowance, setAllowance] = useState(null);
  const [amountDeposited, setAmountDeposited] =
    useState<any>("0.0000000000000000");
  const [flowData, setFlowData] = useState<any>(null);
  const [otherInfo, setOtherInfo] = useState<any>(null);

  const pathname = usePathname();

  let id: string[] | string = pathname.split("/");
  id = id[id.length - 1];

  const [currentVault] = Vaults.filter((vault) => {
    return vault.address === id;
  });

  /**
   * * gets the user allowance and gets the flowrate of user to the contract
   */
  const getAllInfo = async () => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const contract = new ethers.Contract(
      currentVault.extensions.underlyingAsset.address,
      ERC20ABI,
      provider
    );

    const allowanceByUser = await contract.allowance(
      address,
      currentVault.address
    );

    await checkStream();
    otherDetails();
    console.log("aa", allowanceByUser.toString());
    setAllowance(allowanceByUser.toString());
  };

  /**
   * * gives allowance to the pool
   */
  const giveAllowanceHandler = async () => {
    try {
      setLoading(true);

      //@ts-ignore
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        currentVault.extensions.underlyingAsset.address,
        ERC20ABI,
        signer
      );

      const tx = await contract.approve(
        currentVault.address,
        "100000000000000000000000"
      );

      await tx.wait();

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  /**
   * * checks the ongoing stream from user account to the contract
   */
  const checkStream = async () => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const sf = await Framework.create({
      chainId: 420,
      provider,
    });

    const flowInfo = await sf.cfaV1.getFlow({
      superToken: currentVault.superToken,
      //@ts-ignore
      sender: address,
      receiver: smartContractAddress,
      providerOrSigner: provider,
    });

    //! do something with the flow info and show the button if the stream needs to be cancelled
    console.log("flow info is", flowInfo);
    setAmountDeposited(flowInfo.deposit);
    setFlowData(flowInfo);
  };

  const cancelStreamHandler = async () => {
    try {
      setLoading(true);
      //@ts-ignore
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();

      const wallet = new ethers.Wallet(
        //@ts-ignore
        process.env.NEXT_PUBLIC_PRIVATE_KEY,
        provider
      );

      const contract = new ethers.Contract(
        smartContractAddress,
        SMART_CONTRACT_ABI,
        wallet
      );

      await contract.stopDepositing(currentVault.address, address);

      console.log("smart contract execution stopped");
      const sf = await Framework.create({
        chainId: 420,
        provider,
      });

      const token = await sf.loadSuperToken(currentVault.superToken);

      const flowOp = token.deleteFlow({
        //@ts-ignore
        sender: address,
        receiver: smartContractAddress,
      });

      await flowOp.exec(signer);

      console.log("stream stopped");

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  async function otherDetails() {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const contract = new ethers.Contract(
      currentVault.address,
      VAULT_ABI,
      provider
    );

    const balance = await contract.balanceOf(address);

    setOtherInfo((prevState: any) => {
      return {
        ...prevState,
        balance,
      };
    });
  }

  useEffect(() => {
    if (address) {
      getAllInfo();
    }
  }, [address]);

  return (
    <div>
      {flowData && flowData.flowRate == 0 && (
        <div className="flex justify-center mt-20">
          <h1 className="text-7xl font-medium text-orange-500">
            No Active Stream Found
          </h1>
        </div>
      )}
      <div className="flex justify-center mt-10">
        {flowData && flowData.flowRate != 0 && (
          <AmountStreamed amountDeposited={amountDeposited} />
        )}
      </div>
      <div className="mt-[5%]">
        {address && flowData && flowData.flowRate != 0 && (
          <TxDetails
            sender={address}
            receiver={currentVault.address}
            logo={currentVault.logoURI}
          />
        )}
      </div>
      <div>
        {flowData && (
          <PoolTogetherInfo
            vault={currentVault}
            flowData={flowData}
            otherInfo={otherInfo}
          />
        )}
      </div>
      <div>
        {allowance === null || allowance == "0" ? (
          <button
            className={`ml-[30%] mt-20 btn btn-primary w-[600px]`}
            onClick={giveAllowanceHandler}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner"></span>
                <h1>Approving</h1>
              </>
            ) : (
              <span>Approve Vault</span>
            )}
          </button>
        ) : flowData && flowData.flowRate != 0 ? (
          <button
            className={`ml-[30%] mt-20 btn btn-primary w-[600px] text-lg`}
            onClick={cancelStreamHandler}
          >
            <span
              className={`${loading && "loading loading-spinner"} text-center`}
            >
              Cancel Stream
            </span>
          </button>
        ) : (
          <StreamButton vault={currentVault} />
        )}
      </div>
    </div>
  );
};

export default PoolDetails;
