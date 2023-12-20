import AmountStreamed from "../Superfluid/AmountStreamed";
import TxDetails from "../Superfluid/TxDetails";

const PoolDetails = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <AmountStreamed />
      </div>
      <TxDetails />
    </div>
  );
};

export default PoolDetails;
