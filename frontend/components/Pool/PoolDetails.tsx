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
  const [allowance, setAllowance] = useState(null);

  const pathname = usePathname();

  let id: string[] | string = pathname.split("/");
  id = id[id.length - 1];

  console.log("id is", id);
  const [currentVault] = Vaults.filter((vault) => {
    return vault.address === id;
  });

  console.log("current", currentVault);

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

    setAllowance(allowanceByUser.toString());
  };

  const giveAllowanceHandler = async () => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      currentVault.extensions.underlyingAsset.address,
      ERC20ABI,
      signer
    );

    await contract.approve(currentVault.address, "100000000000000000000000");
  };

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

    //! do something with the flow info
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
        <TxDetails />
      </div>
      <div>
        <PoolTogetherInfo vault={currentVault} />
      </div>
      <div>
        {allowance === null || allowance == "0" ? (
          <button
            className="ml-[46%] mt-10 btn btn-primary"
            onClick={giveAllowanceHandler}
          >
            Approve Vault
          </button>
        ) : (
          <StreamButton vault={currentVault} />
        )}
      </div>
    </div>
  );
};

export default PoolDetails;
