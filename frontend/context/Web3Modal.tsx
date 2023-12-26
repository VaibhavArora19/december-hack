"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

// 1. Get projectId
const projectId = "52529d898a82b4d4dd778c744177c58e";

// 2. Set chains
const optimismGoerli = {
  chainId: 420,
  name: "Optimism Goerli",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl:
    "https://opt-goerli.g.alchemy.com/v2/vGo2OCKMAn0nasqwipBY8tDjJY-Evrnr",
};

// 3. Create modal
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [optimismGoerli],
  projectId,
});

export function Web3Modal({ children }: { children: any }) {
  return children;
}
