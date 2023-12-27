export const smartContractAddress =
  "0x75Ce802c479A31aAa88Cb0BDE13853128055586A";

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
    superToken: "0x5883d51A8b4bC48252ae3Ce7EDD9B62903e40E13",
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
    superToken: "0x5883d51A8b4bC48252ae3Ce7EDD9B62903e40E13",
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
    superToken: "0xC169ADfdD6dbCFfb80DffAF2FCaAB9bF4820AF18",
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
    superToken: "0xC169ADfdD6dbCFfb80DffAF2FCaAB9bF4820AF18",

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
    superToken: "0xC169ADfdD6dbCFfb80DffAF2FCaAB9bF4820AF18",

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
    superToken: "0xC169ADfdD6dbCFfb80DffAF2FCaAB9bF4820AF18",

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
