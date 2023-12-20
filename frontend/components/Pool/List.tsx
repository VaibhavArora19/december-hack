import Image from "next/image";
import Pool from "./Pool";

const PoolList = [
  {
    icon: "/DAI-OP.jpg",
    name: "Prize DAI-LY",
    network: "Optimism",
    address: "0x1",
    depositedToken: "0x2",
    prizeToken: "0x3",
  },
  {
    icon: "/WETH-OP.jpg",
    name: "Prize WETH-PWETH",
    network: "Optimism",
    address: "0x1",
    depositedToken: "0x2",
    prizeToken: "0x3",
  },
];

const List = () => {
  return (
    <div className="mt-40 ml-[18%] mb-10 grid grid-cols-3 place-content-center">
      {PoolList.map((pool, index) => (
        <div key={index}>
          <Pool poolInfo={pool} />
        </div>
      ))}
    </div>
  );
};

export default List;
