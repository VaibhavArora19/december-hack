"use client";

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Framework } from "@superfluid-finance/sdk-core";
import { smartContractAddress } from "@/constants";

const AmountStreamed = (props: {
  sender: any;
  receiver: any;
  currentVault: any;
}) => {
  const [value, setValue] = useState<any>({
    flowRate: null,
    val: null,
  });
  const getData = async () => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const sf = await Framework.create({
      chainId: 420,
      provider,
    });

    const token = await sf.loadSuperToken(props.currentVault.superToken);

    console.log("sssss", props.sender, props.receiver);
    //@ts-ignore
    const res = await token.getFlow({
      sender: props.sender,
      receiver: smartContractAddress,
      providerOrSigner: provider,
    });

    // console.log("ress is", res);

    const d = new Date(res.timestamp).getTime();

    let start: any = (new Date().getTime() - d) * +res.flowRate;

    start = start.toString().substring(0, 17);

    const flowRate = ethers.utils.formatEther(res.flowRate);

    setValue({
      flowRate,
      val: start,
    });
    // console.log("ss", start);

    // let duration: any =
    //   new Date().setMonth(new Date(res.timestamp).getMonth() + 1) -
    //   new Date().getTime();

    // //   end = end.toString();

    // let end = "100000000000000000000";

    // setValue({
    //   start: start.substring(0, 17),
    //   end,
    //   duration,
    // });
    // console.log("end is", end);
  };

  useEffect(() => {
    setInterval(() => {
      getData();
    }, 3000);
  }, []);

  //100000000000000000000

  return (
    <div>
      <div>
        <h3 className="text-[1.25rem] font-medium text-center">
          Total Amount Streamed
        </h3>
      </div>
      <div className="text-[3.25rem] font-medium tracking-[-0.5px] text-center">
        {value.flowRate && <h1>{value.val}</h1>}
      </div>
      <h2 className="text-[1.5rem] text-green-600 font-medium">fDAIx</h2>
    </div>
  );
};

export default AmountStreamed;
