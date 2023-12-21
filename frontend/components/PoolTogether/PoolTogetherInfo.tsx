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

const PoolTogetherInfo = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-y-2 mt-[7%] ml-[12%]">
        {keyValuePair.map((singleVal: any) => {
          return (
            <InfoComp
              key={singleVal.key}
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
