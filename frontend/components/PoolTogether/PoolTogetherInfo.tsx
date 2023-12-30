import { Vaults } from "@/constants";
import InfoComp from "./InfoComp";
import { ethers } from "ethers";

export const keyValuePair = [
  {
    token: "Your balance",
    value: "0.00000013 fDAIx",
  },
  {
    token: "Flow Rate",
    value: "0.0011 fDAIx/hour",
  },
  {
    token: "Your win chance",
    value: "0.75%",
  },
  {
    token: "TVL",
    value: "100 DAI",
  },
  {
    token: "Deposit Token",
    value: "0x4D07Ba104ff254c19B443aDE6224f744Db84FB8A",
  },
  {
    token: "Prize Token",
    value: "0xbe2e20d3f4dd9336acc14d214ade3afbdef80ccb",
  },
];

const PoolTogetherInfo = (props: {
  vault: (typeof Vaults)[number];
  flowData: any;
}) => {
  const formattedVaultInfo = [
    {
      token: "Your balance",
      value: "120012", //!the amount user deposited in pool together edit later
    },
    {
      token: "Pool Address",
      value: props.vault.address, //!check if we can get the value of this from somewhere
    },
    {
      token: "Deposit Token",
      value: props.vault.extensions.underlyingAsset.address,
    },
    {
      token: "Flow Rate",
      value: ethers.utils.formatEther(props.flowData?.flowRate) + " fDAIx/sec", //!need to send with the token name
    },
    {
      token: "TVL",
      value: "100 DAI", //!need to edit this as well
    },
    {
      token: "Super Token",
      value: props.vault.superToken,
    },
  ];

  return (
    <div className="mt-[7%]">
      <div className="grid grid-cols-2 gap-y-2 mt-[2%] ml-[13%]">
        {formattedVaultInfo.map((singleVal: any) => {
          return (
            <InfoComp
              key={singleVal.token}
              token={singleVal.token}
              value={singleVal.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PoolTogetherInfo;
