"use client";

import PoolTogetherInfo from "../PoolTogether/PoolTogetherInfo";
import AmountStreamed from "../Superfluid/AmountStreamed";
import TxDetails from "../Superfluid/TxDetails";
import StreamButton from "../UI/StreamButton";
import { useSearchParams } from "next/navigation";
import { Vaults } from "@/constants";

const PoolDetails = () => {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const [currentVault] = Vaults.filter((vault) => {
    return vault.address === id;
  });
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
        <StreamButton vault={currentVault} />
      </div>
    </div>
  );
};

export default PoolDetails;
