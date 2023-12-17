import Image from "next/image";
import { TPoolInfo } from "@/types/PoolInfo";

const Pool = ({ poolInfo }: { poolInfo: TPoolInfo }) => {
  return (
    <div className="w-[50%] rounded-md bg-gray-900">
      <div className="mb-4 ml-4 mt-2">
        <Image
          src={poolInfo.icon}
          alt="Pool icon"
          width={60}
          height={60}
          className="rounded-full "
        />
      </div>
      <div className="ml-4 mt-2">
        <h1 className="text-lg">{poolInfo.name}</h1>
        <h3 className="text-gray-500">{poolInfo.network}</h3>
      </div>
    </div>
  );
};

export default Pool;
