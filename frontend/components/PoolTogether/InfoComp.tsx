type IProp = {
  token: string;
  value: string;
};

const InfoComp = (props: IProp) => {
  return (
    <div className="w-[70%] flex justify-between">
      <div>
        <h3>{props.token}</h3>
      </div>
      <div>
        <h3 className="font-semibold">
          {props.value.includes("0x") && props.value?.length > 10
            ? props.value.substring(0, 5) +
              "..." +
              props.value.substring(38, 43)
            : props.value}
        </h3>
      </div>
    </div>
  );
};

export default InfoComp;
