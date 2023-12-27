import Image from "next/image";
import Pool from "./Pool";
import { Vaults } from "@/constants";

const PoolList = [
  {
    icon: "/background.png",
    name: "Prize DAI-LY",
    network: "Optimism",
    address: "0x1",
    depositedToken: "0x2",
    prizeToken: "0x3",
  },
  {
    icon: "/background.png",
    name: "Prize WETH-PWETH",
    network: "Optimism",
    address: "0x1",
    depositedToken: "0x2",
    prizeToken: "0x3",
  },
];

const List = () => {
  return (
    <div className="mt-40 ml-[6%] mb-10 grid grid-cols-3 place-content-center">
      {Vaults.map((pool, index) => (
        <div key={index} className="mt-10">
          <Pool poolInfo={pool} />
        </div>
      ))}
    </div>
  );
};

export default List;
