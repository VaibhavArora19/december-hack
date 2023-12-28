"use client";

import ActivityTable from "@/components/Activity/ActivityTable";
import { useEffect } from "react";
import { createClient, cacheExchange, fetchExchange } from "urql";
import { streamSendQuery } from "@/queries";
import { useAccount } from "wagmi";
import { smartContractAddress } from "@/constants";

const Activity = () => {
  const { address } = useAccount();

  async function getData() {
    const client = createClient({
      url: "https://optimism-goerli.subgraph.x.superfluid.dev",
      exchanges: [cacheExchange, fetchExchange],
    });

    const data = await client
      .query(streamSendQuery, {
        sender: address,
        receiver: smartContractAddress,
      })
      .toPromise();

    console.log("data is", data);
  }

  useEffect(() => {
    if (address) {
      getData();
    }
  }, [address]);

  return <ActivityTable />;
};

export default Activity;
