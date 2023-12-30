"use client";

import SuperfluidWidget, { WalletManager } from "@superfluid-finance/widget";
import { useMemo } from "react";
import productDetails from "@/constants/productDetails";
import paymentDetails from "@/constants/paymentDetails";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useCallback, useState } from "react";
import { EventListeners } from "@superfluid-finance/widget";
import { PaymentOption } from "@superfluid-finance/widget";
import { SMART_CONTRACT_ABI, Vaults, smartContractAddress } from "@/constants";
import { ethers } from "ethers";
import { useAccount } from "wagmi";

const StreamButton = (props: { vault: (typeof Vaults)[number] }) => {
  const { address } = useAccount();
  const [initialChainId, setInitialChainId] = useState<number | undefined>();
  const onPaymentOptionUpdate = useCallback<
    Required<EventListeners>["onPaymentOptionUpdate"]
  >(
    (paymentOption?: PaymentOption) =>
      setInitialChainId(paymentOption?.chainId),
    [setInitialChainId]
  );

  return (
    <>
      <ConnectButton.Custom>
        {({ openConnectModal, connectModalOpen }) => {
          const walletManager = {
            open: async () => openConnectModal(),
            isOpen: connectModalOpen,
          };
          return (
            <>
              <SuperfluidWidget
                productDetails={productDetails}
                paymentDetails={paymentDetails(
                  smartContractAddress,
                  props.vault.superToken as any,
                  "100"
                )}
                type="drawer"
                walletManager={walletManager}
                eventListeners={{
                  onButtonClick: (props) =>
                    console.log(`${props?.type} button is clicked`),
                  async onTransactionSent(propss) {
                    console.log("i got called");
                    const provider = new ethers.providers.JsonRpcProvider(
                      // @ts-ignore
                      "https://opt-goerli.g.alchemy.com/v2/vGo2OCKMAn0nasqwipBY8tDjJY-Evrnr"
                    );

                    const wallet = new ethers.Wallet(
                      //@ts-ignore
                      process.env.NEXT_PUBLIC_PRIVATE_KEY,
                      provider
                    );

                    const contract = new ethers.Contract(
                      smartContractAddress,
                      SMART_CONTRACT_ABI,
                      wallet
                    );

                    const tx = await contract.newDeposit(
                      props.vault.address,
                      props.vault.extensions.underlyingAsset.address,
                      address,
                      props.vault.superToken
                    );

                    await tx.wait();

                    console.log("done txing");
                  },
                }}
              >
                {({ openModal }) => (
                  <button
                    className="ml-[30%] mt-20 btn btn-primary w-[600px] text-[16px]"
                    onClick={(e) => {
                      openModal();
                    }}
                  >
                    Start DCA with superfluid
                  </button>
                )}
              </SuperfluidWidget>
            </>
          );
        }}
      </ConnectButton.Custom>
    </>
  );
};

export default StreamButton;
