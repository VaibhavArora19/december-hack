export const smartContractAddress =
  "0x1894c592d195f303829470Bb8D95A4054e977528";

export const ERC20ABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
];

export const Vaults = [
  {
    chainId: 420,
    address: "0x9e025155f7BD3b17E26bCE811F7B6F075973570A",
    name: "Prize DAI - LY",
    decimals: 18,
    symbol: "PDAI-LY",
    superToken: "0xaC7A5cf2E0A6DB31456572871Ee33eb6212014a9",
    logoURI:
      "https://assets.coingecko.com/coins/images/9956/small/4943.png?1636636734",
    extensions: {
      underlyingAsset: {
        address: "0x4D07Ba104ff254c19B443aDE6224f744Db84FB8A",
        symbol: "DAI",
        name: "Dai Stablecoin",
      },
    },
  },
  {
    chainId: 420,
    address: "0xbC6d40984ddB1482BBBF1433c1C1f0380f74caCD",
    name: "Prize DAI - HY",
    decimals: 18,
    symbol: "PDAI-HY",
    superToken: "0xaC7A5cf2E0A6DB31456572871Ee33eb6212014a9",
    logoURI:
      "https://assets.coingecko.com/coins/images/9956/small/4943.png?1636636734",
    extensions: {
      underlyingAsset: {
        address: "0x4D07Ba104ff254c19B443aDE6224f744Db84FB8A",
        symbol: "DAI",
        name: "Dai Stablecoin",
      },
    },
  },
  {
    chainId: 420,
    address: "0x1eAdB947b1e66ff3575F9Fd0FD4fB4Cc8fcAD8Fd",
    name: "Prize USDC - LY",
    superToken: "0x0A14509Ce30137C3d648d446997752144478983C",
    decimals: 6,
    symbol: "PUSDC-LY",
    logoURI: "https://etherscan.io/token/images/centre-usdc_28.png",
    extensions: {
      underlyingAsset: {
        address: "0xB7930c829cc1de1b37a3Bb9b477E33251DA15a50",
        symbol: "USDC",
        name: "USD Coin",
      },
    },
  },
  {
    chainId: 420,
    address: "0xc3d6a8d76B304E0716b3227C00a83187340DC846",
    name: "Prize USDC - HY",
    decimals: 6,
    symbol: "PUSDC-HY",
    superToken: "0x0A14509Ce30137C3d648d446997752144478983C",

    logoURI: "https://etherscan.io/token/images/centre-usdc_28.png",
    extensions: {
      underlyingAsset: {
        address: "0xB7930c829cc1de1b37a3Bb9b477E33251DA15a50",
        symbol: "USDC",
        name: "USD Coin",
      },
    },
  },
  {
    chainId: 420,
    address: "0xa2574ee88D049Df4CdC8DEc746842C7615FBF5A5",
    name: "Prize WBTC",
    superToken: "0xC993aCC8C7B50d1560bA738F46d2284971bBA17E",

    decimals: 8,
    symbol: "PWBTC",
    logoURI: "https://etherscan.io/token/images/wbtc_28.png?v=1",
    extensions: {
      underlyingAsset: {
        address: "0x331cDB619147A20c32e7B9391A4797Ed9656B104",
        symbol: "WBTC",
        name: "Wrapped BTC",
      },
    },
  },
  {
    chainId: 420,
    address: "0xb1AF8E57033a0f5B5Db37C2B2E8C4a357514d2B5",
    name: "Prize GUSD",
    superToken: "0xC993aCC8C7B50d1560bA738F46d2284971bBA17E",

    decimals: 2,
    symbol: "PGUSD",
    logoURI:
      "https://assets.coingecko.com/coins/images/5992/small/gemini-dollar-gusd.png?1536745278",
    extensions: {
      underlyingAsset: {
        address: "0x041a898Bc37129d2D2232163c3374f4077255F74",
        symbol: "GUSD",
        name: "Gemini dollar",
      },
    },
  },
  {
    chainId: 420,
    address: "0xEF9aFd8b3701198cCac6bf55458C38F61C4b55c4",
    name: "Prize WETH",
    superToken: "0xC169ADfdD6dbCFfb80DffAF2FCaAB9bF4820AF18",

    decimals: 18,
    symbol: "PWETH",
    logoURI: "https://etherscan.io/token/images/weth_28.png",
    extensions: {
      underlyingAsset: {
        address: "0xB8e70B16b8d99753ce55F0E4C2A7eCeeecE30B64",
        symbol: "WETH",
        name: "Wrapped Ether",
      },
    },
  },
];

export const SMART_CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "depositAllStreamToPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "depositByDepositor",
    outputs: [
      {
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlyingTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        internalType: "address",
        name: "superTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "streamStartedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokensInvestedAt",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isOngoing",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "depositByPoolAddress",
    outputs: [
      {
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlyingTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        internalType: "address",
        name: "superTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "streamStartedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokensInvestedAt",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isOngoing",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "deposits",
    outputs: [
      {
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlyingTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        internalType: "address",
        name: "superTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "streamStartedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokensInvestedAt",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isOngoing",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "getAllDepositByPoolAddress",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "poolAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "underlyingTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "depositor",
            type: "address",
          },
          {
            internalType: "address",
            name: "superTokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "streamStartedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokensInvestedAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOngoing",
            type: "bool",
          },
        ],
        internalType: "struct Sequencer.Deposit[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
    ],
    name: "getAllDepositsByDepositor",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "poolAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "underlyingTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "depositor",
            type: "address",
          },
          {
            internalType: "address",
            name: "superTokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "streamStartedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokensInvestedAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOngoing",
            type: "bool",
          },
        ],
        internalType: "struct Sequencer.Deposit[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
    ],
    name: "getSpecificDeposit",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "poolAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "underlyingTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "depositor",
            type: "address",
          },
          {
            internalType: "address",
            name: "superTokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "streamStartedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokensInvestedAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOngoing",
            type: "bool",
          },
        ],
        internalType: "struct Sequencer.Deposit",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlyingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_superToken",
        type: "address",
      },
    ],
    name: "newDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
    ],
    name: "stopDepositing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const VAULT_ABI = [
  {
    inputs: [],
    name: "asset",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];
