import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="flex gap-2 place-content-center mt-20">
        <div className="w-[30%]">
          <h1 className="text-[40px] font-bold mb-4">Explore our Pools</h1>
          <h3 className="text-gray-500">
            The protocol provides aggregation information services on exchange
            protocols and networks. The core part of the protocol is the 1inch
            v5 smart contract, which performs runtime verification of
            transaction execution. <br /> <br />
            As a result, user funds cant be lost even in case of interaction
            with an unsafe liquidity source. Since the smart contract ensures
            security, the protocol can be used in various aggregation
            information services, such as Pathfinder, developed and run by the
            1inch Labs.
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
