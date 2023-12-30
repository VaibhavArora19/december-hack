"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[#0c0c0c] backdrop-blur-md"></div>
      <div className="flex justify-between px-8 py-4 w-full relative z-10 ">
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
              className="cursor-pointer text-[1.15rem] font-medium  transition duration-300 hover:text-white  relative "
              onClick={() => {
                router.push("/deposit");
              }}
            >
              Deposit
            </h3>
            <h3
              className="cursor-pointer text-[1.15rem] font-medium  transition duration-300 hover:text-white  relative"
              onClick={() => {
                router.push("/pools");
              }}
            >
              Pools
            </h3>
            <h3
              className="cursor-pointer text-[1.15rem] font-medium  transition duration-300 hover:text-white  relative"
              onClick={() => {
                router.push("/activity");
              }}
            >
              Activity
            </h3>
          </div>
          <div className="mt-[0.6rem]">
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
