import Image from "next/image";

const UserCard = () => {
  return (
    <div className="flex gap-4 w-[350px] h-[70px] border-solid border-blue-400 border-[1px] rounded-lg">
      <div className="pt-6 pl-4">
        <Image
          src="/DAI-OP.jpg"
          alt="user image"
          width={25}
          height={25}
          className="rounded-md"
        />
      </div>
      <div className="pt-6 pl-2 font-medium">
        <h3>0xVaibhav.lens</h3>
      </div>
    </div>
  );
};

export default UserCard;
