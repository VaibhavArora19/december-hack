"use client";

import ActivityTable from "@/components/Activity/ActivityTable";
import { useEffect, useState } from "react";
import { createClient, cacheExchange, fetchExchange } from "urql";
import { streamSendQuery } from "@/queries";
import { useAccount } from "wagmi";
import {
  ACTIVITIES,
  SMART_CONTRACT_ABI,
  smartContractAddress,
} from "@/constants";
import { ethers } from "ethers";

const Activity = () => {
  const { address } = useAccount();
  const [streamInfo, setStreamInfo] = useState();
  async function getData() {
    const client = createClient({
      url: "https://optimism-goerli.subgraph.x.superfluid.dev",
      exchanges: [cacheExchange, fetchExchange],
    });

    const data: any = await client
      .query(streamSendQuery, {
        sender: address?.toLowerCase(),
      })
      .toPromise();

    console.log("data is", data);
    setStreamInfo(data.data.streams);
  }

  // useEffect(() => {
  //   if (address) {
  //     getData();
  //   }
  // }, [address]);

  return <>{<ActivityTable streamInfo={ACTIVITIES} />}</>;
};

export default Activity;
