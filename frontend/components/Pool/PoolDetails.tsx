"use client";

import PoolTogetherInfo from "../PoolTogether/PoolTogetherInfo";
import AmountStreamed from "../Superfluid/AmountStreamed";
import TxDetails from "../Superfluid/TxDetails";
import StreamButton from "../UI/StreamButton";
import { usePathname } from "next/navigation";
import { ERC20ABI, Vaults, smartContractAddress } from "@/constants";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Framework } from "@superfluid-finance/sdk-core";
import { useAccount } from "wagmi";

const PoolDetails = () => {
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [allowance, setAllowance] = useState(null);

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

    const flowInfo = sf.cfaV1.getFlow({
      superToken: currentVault.superToken,
      //@ts-ignore
      sender: address,
      receiver: smartContractAddress,
      providerOrSigner: provider,
    });

    //! do something with the flow info and show the button if the stream needs to be cancelled
    console.log("flow info is", flowInfo);
  };

  useEffect(() => {
    if (address) {
      getAllInfo();
    }
  }, [address]);

  return (
    <div>
      <div className="flex justify-center mt-10">
        <AmountStreamed />
      </div>
      <div className="mt-[5%]">
        {address && (
          <TxDetails
            sender={address}
            receiver={currentVault.address}
            logo={currentVault.logoURI}
          />
        )}
      </div>
      <div>
        <PoolTogetherInfo vault={currentVault} />
      </div>
      <div className="mb-4">
        {allowance === null || allowance == "0" ? (
          <button
            className={`ml-[45%] mt-10 btn btn-primary`}
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
        ) : (
          <StreamButton vault={currentVault} />
        )}
      </div>
    </div>
  );
};

export default PoolDetails;
