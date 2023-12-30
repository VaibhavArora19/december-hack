import { Vaults } from "@/constants";
import { ethers } from "ethers";
import InfoComp from "./InfoComp";

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
  otherInfo: any;
}) => {
  const formattedVaultInfo = [
    {
      token: "Your balance",
      value:
        props.otherInfo && props.otherInfo.balance
          ? ethers.utils.formatEther(props.otherInfo.balance).substring(0, 8) +
            " DAI"
          : "0", //!the amount user deposited in pool together edit later
    },
    {
      token: "Pool Address",
      value: props.vault.address,
    },
    {
      token: "Deposit Token",
      value: props.vault.extensions.underlyingAsset.address,
    },
    {
      token: "Flow Rate",
      value: ethers.utils.formatEther(props.flowData?.flowRate) + " fDAIx/sec",
    },
    {
      token: "TVL",
      value: "23.13 DAI",
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
