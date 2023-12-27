"use client";

import Image from "next/image";
import { TPoolInfo } from "@/types/PoolInfo";
import { useRouter } from "next/navigation";

const Pool = ({ poolInfo }: { poolInfo: TPoolInfo }) => {
  const router = useRouter();

  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src="/background.png" alt="Background" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{poolInfo.name}</h2>
        <p>
          {"Optimism: " +
            poolInfo.address.substring(0, 5) +
            "..." +
            poolInfo.address.slice(-5)}
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              router.push(`/pools/${poolInfo.address}`);
            }}
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pool;
