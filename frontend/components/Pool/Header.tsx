import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="flex gap-2 place-content-center mt-20">
        <div className="w-[30%]">
          <h1 className="text-[40px] font-bold mb-4">Explore our Pools</h1>
          <h3 className="text-gray-500">
            The protocol provides safe information services on exchange
            protocols and networks. The core part of the protocol is the pool
            together smart contract, which performs the deposit into the defi
            vaults. <br /> <br />
            As a result, user can deposit the stable tokens into the protocol
            while user themselves shares the super token streaming. Since the
            smart contract ensures security, the protocol can be used in various
            aggregation information services.
          </h3>
        </div>
        <div className="pt-16">
          <Image
            src="/how-it-works.webp"
            alt="how it works"
            width={500}
            height={60}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
