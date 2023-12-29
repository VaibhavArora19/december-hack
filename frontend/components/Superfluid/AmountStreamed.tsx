import { ethers } from "ethers";

const AmountStreamed = (props: { amountDeposited: any }) => {
  const amt =
    props.amountDeposited === "0.0000000000000000"
      ? props.amountDeposited
      : ethers.utils.formatEther(props.amountDeposited);

  console.log(amt);
  return (
    <div>
      <div>
        <h3 className="text-[1.25rem] font-medium text-center">
          Total Amount Streamed
        </h3>
      </div>
      <div className="text-[3.25rem] font-medium tracking-[-0.5px] text-center">
        <h1>{amt}</h1>
      </div>
      <h2 className="text-[1.5rem] text-green-600 font-medium">fDAIx</h2>
    </div>
  );
};

export default AmountStreamed;
