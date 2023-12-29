"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>
      <div className="flex justify-between py-4 w-full relative z-10 ">
        <div>
          <h1
            className="cursor-pointer text-[2rem] font-medium"
            onClick={() => {
              router.push("/");
            }}>
            SF.
          </h1>
        </div>
        <div className="flex justify-around gap-6">
          <div className="flex justify-around gap-6 mt-4">
            <h3
              className="cursor-pointer text-[1.15rem] font-medium  transition duration-300 hover:text-white  relative "
              onClick={() => {
                router.push("/deposit");
              }}>
              Deposit
            </h3>
            <h3
              className="cursor-pointer text-[1.15rem] font-medium  transition duration-300 hover:text-white  relative"
              onClick={() => {
                router.push("/pools");
              }}>
              Pools
            </h3>
            <h3
              className="cursor-pointer text-[1.15rem] font-medium  transition duration-300 hover:text-white  relative"
              onClick={() => {
                router.push("/activity");
              }}>
              Activity
            </h3>
          </div>
          <div className="mt-[0.8rem]">
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
