import { WidgetProps } from "@superfluid-finance/widget";

import paymentOptions from "./paymentOptions";

const paymentDetails = (
  receiverAddress: `0x${string}`,
  superToken: `0x${string}`,
  flowRate: `${number}`
): WidgetProps["paymentDetails"] => {
  return {
    paymentOptions: paymentOptions(receiverAddress, superToken, flowRate),
  };
};

export default paymentDetails;
