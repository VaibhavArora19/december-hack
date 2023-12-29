"use client";

import { SMART_CONTRACT_ABI, smartContractAddress } from "@/constants";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const ActivityRow = (props: any) => {
  const { address } = useAccount();
  const [poolDetails, setPoolDetails] = useState<any>(null);

  const getPoolInfo = async () => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const contract = new ethers.Contract(
      smartContractAddress,
      SMART_CONTRACT_ABI,
      provider
    );

    const getPools = await contract.getPools();

    console.log("abc", getPools);
    const [poolInfo] = getPools.filter((pool: any) => {
      return (
        pool.superToken.toLowerCase() === props.stream.token.id.toLowerCase()
      );
    });

    console.log("pp", poolInfo);
    setPoolDetails(poolInfo);
  };

  useEffect(() => {
    if (address) {
      getPoolInfo();
    }
  }, [address]);
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src="/DAI-OP.jpg" alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {props.stream.sender.id.substring(0, 5) +
                "..." +
                props.stream.sender.id.substring(38, 43)}
            </div>
          </div>
        </div>
      </td>
      <td>
        {poolDetails &&
          poolDetails.poolAddress.substring(0, 7) +
            "..." +
            poolDetails.poolAddress.slice(-7)}
      </td>
      <td>
        {ethers.utils.formatEther(
          props.stream.currentFlowRate.substring(0, 8)
        ) +
          " " +
          props.stream.token.symbol +
          "/sec"}
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">
          {new Date(props.stream.createdAtTimestamp * 1000).toUTCString()}
        </button>
      </th>
    </tr>
  );
};

export default ActivityRow;
