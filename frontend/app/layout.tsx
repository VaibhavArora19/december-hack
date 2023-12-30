"use client";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { optimismGoerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [optimismGoerli],
  [
    alchemyProvider({
      apiKey:
        "https://opt-goerli.g.alchemy.com/v2/vGo2OCKMAn0nasqwipBY8tDjJY-Evrnr",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "52529d898a82b4d4dd778c744177c58e",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
              <Navbar />
              {children}
            </RainbowKitProvider>
          </WagmiConfig>
        </div>
        <Footer />
      </body>
    </html>
  );
}
