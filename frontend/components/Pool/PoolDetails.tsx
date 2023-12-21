import PoolTogetherInfo from "../PoolTogether/PoolTogetherInfo";
import AmountStreamed from "../Superfluid/AmountStreamed";
import TxDetails from "../Superfluid/TxDetails";

const PoolDetails = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <AmountStreamed />
      </div>
      <div className="mt-[5%]">
        <TxDetails />
      </div>
      <div>
        <PoolTogetherInfo />
      </div>
    </div>
  );
};

export default PoolDetails;
