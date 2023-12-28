import UserCard from "./UserCard";
import Image from "next/image";

type IProps = {
  sender: string;
  receiver: string;
  logo: string;
};

const TxDetails = (props: IProps) => {
  return (
    <div className="flex justify-center align-center">
      <div>
        <div className="mb-2 pl-2 font-medium">
          <h4>Sender</h4>
        </div>
        <UserCard address={props.sender} logo={props.logo} />
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
        <UserCard address={props.receiver} logo={props.logo} />
      </div>
    </div>
  );
};

export default TxDetails;
