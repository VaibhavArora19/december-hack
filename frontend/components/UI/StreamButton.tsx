"use client";

import { WagmiConfig } from "wagmi";
import SuperfluidWidget from "@superfluid-finance/widget";

const StreamButton = () => {
  const streamHandler = async () => {};

  return (
    <div>
      <button
        className="btn btn-primary w-[14rem] text-lg"
        onClick={streamHandler}
      >
        Start Stream
      </button>
    </div>
  );
};

export default StreamButton;
