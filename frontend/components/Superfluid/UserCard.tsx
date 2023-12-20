import Image from "next/image";

const UserCard = () => {
  return (
    <div className="flex gap-4">
      <Image
        src="/DAI-OP.jpg"
        alt="user image"
        width={25}
        height={25}
        className="rounded-md"
      />
      <h3>0xVaibhav.lens</h3>
    </div>
  );
};

export default UserCard;
