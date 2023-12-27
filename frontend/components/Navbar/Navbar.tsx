"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between mx-12">
      <div>
        <h1
          className="cursor-pointer text-[2rem] font-medium"
          onClick={() => {
            router.push("/");
          }}
        >
          SF.
        </h1>
      </div>
      <div className="flex justify-around gap-6">
        <div className="flex justify-around gap-6 mt-4">
          <h3
            className="cursor-pointer text-[1.15rem] font-medium"
            onClick={() => {
              router.push("/pools");
            }}
          >
            Pools
          </h3>
          <h3
            className="cursor-pointer text-[1.15rem] font-medium"
            onClick={() => {
              router.push("/");
            }}
          >
            Activity
          </h3>
        </div>
        <div className="mt-[0.8rem]">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
