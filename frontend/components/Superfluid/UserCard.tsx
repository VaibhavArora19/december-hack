import Image from "next/image";

type IProps = {
  address: string;
  logo: string;
};

const UserCard = (props: IProps) => {
  return (
    <div className="flex gap-4 w-[350px] h-[70px] border-solid border-blue-400 border-[1px] rounded-lg">
      <div className="pt-6 pl-4">
        <Image
          src={props.logo}
          alt="user image"
          width={25}
          height={25}
          className="rounded-md"
        />
      </div>
      <div className="pt-6 pl-2 font-medium">
        <h3>
          {props.address.substring(0, 5) + "..." + props.address.slice(-5)}
        </h3>
      </div>
    </div>
  );
};

export default UserCard;
