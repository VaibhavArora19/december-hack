import Image from "next/image";
import Pool from "./Pool";

const PoolList = [
  {
    icon: "/DAI-OP.jpg",
    name: "Prize DAI-LY",
    network: "Optimism",
  },
  {
    icon: "/WETH-OP.jpg",
    name: "Prize WETH-PWETH",
    network: "Optimism",
  },
];

const List = () => {
  return (
    <div className="mt-40 ml-24 grid grid-cols-3 place-content-center">
      {PoolList.map((pool, index) => (
        <div key={index}>
          <Pool poolInfo={pool} />
        </div>
      ))}
    </div>
  );
};

export default List;
