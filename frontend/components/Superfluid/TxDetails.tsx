import UserCard from "./UserCard";
import Image from "next/image";

const TxDetails = () => {
  return (
    <div className="flex justify-center align-center">
      <div>
        <div className="mb-2 pl-2 font-medium">
          <h4>Sender</h4>
        </div>
        <UserCard />
      </div>
      <div className="pt-12">
        <Image
          src="https://app.superfluid.finance/gifs/stream-loop.gif"
          alt="stream"
          width={60}
          height={60}
        />
      </div>
      <div>
        <div className="mb-2 pl-2 font-medium">
          <h4>Receiver</h4>
        </div>
        <UserCard />
      </div>
    </div>
  );
};

export default TxDetails;
