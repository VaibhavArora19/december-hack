"use client";

import SuperfluidWidget, { WalletManager } from "@superfluid-finance/widget";
import { useMemo } from "react";
import productDetails from "@/constants/productDetails";
import paymentDetails from "@/constants/paymentDetails";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useCallback, useState } from "react";
import { EventListeners } from "@superfluid-finance/widget";
import { PaymentOption } from "@superfluid-finance/widget";
import { Vaults, smartContractAddress } from "@/constants";

const StreamButton = (props: { vault: (typeof Vaults)[number] }) => {
  const [initialChainId, setInitialChainId] = useState<number | undefined>();
  const onPaymentOptionUpdate = useCallback<
    Required<EventListeners>["onPaymentOptionUpdate"]
  >(
    (paymentOption?: PaymentOption) =>
      setInitialChainId(paymentOption?.chainId),
    [setInitialChainId]
  );
  const eventListeners = useMemo<EventListeners>(
    () => ({ onPaymentOptionUpdate }),
    [onPaymentOptionUpdate]
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
                  "0xasd",
                  "1"
                )}
                type="dialog"
                walletManager={walletManager}
              >
                {({ openModal }) => (
                  <button
                    className="ml-[43%] mt-10 btn btn-primary"
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
