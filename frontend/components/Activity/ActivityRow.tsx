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

    const getPools = await contract.getAllDepositsByDepositor(address);

    console.log("abc", getPools);
    const [poolInfo] = getPools.filter((pool: any) => {
      return (
        pool.superTokenAddress.toLowerCase() ===
        props.stream.token.id.toLowerCase()
      );
    });

    console.log("pp", poolInfo);
    setPoolDetails(poolInfo);
  };

  // useEffect(() => {
  //   if (address) {
  //     getPoolInfo();
  //   }
  // }, [address]);
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
            <div className="w-12 h-12 rounded-md">
              <img src="/img2.png" alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {props.stream.sender.substring(0, 5) +
                "..." +
                props.stream.sender.substring(38, 43)}
            </div>
          </div>
        </div>
      </td>
      <td>
        {props.stream.poolAddress.substring(0, 10) +
          "..." +
          props.stream.poolAddress.substring(32, 43)}
      </td>
      <td>{props.stream.flowRate}</td>
      <th>
        <button className="btn btn-ghost btn-xs">
          {props.stream.CreatedAt}
        </button>
      </th>
    </tr>
  );
};

export default ActivityRow;
