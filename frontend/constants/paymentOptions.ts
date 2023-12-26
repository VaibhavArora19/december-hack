import { PaymentOption } from "@superfluid-finance/widget";

const paymentOptions = (
  receiverAddress: `0x${string}`,
  superToken: `0x${string}`,
  flowRate: `${number}`
): PaymentOption[] => {
  return [
    {
      chainId: 420,
      receiverAddress: receiverAddress,
      superToken: {
        address: superToken,
      },
      flowRate: {
        amountEther: flowRate,
        period: "month",
      },
    },
  ];
};
export default paymentOptions;
