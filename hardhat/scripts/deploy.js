// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const poolAddress = [
    "0x9e025155f7BD3b17E26bCE811F7B6F075973570A",
    "0xbC6d40984ddB1482BBBF1433c1C1f0380f74caCD",
    "0x1eAdB947b1e66ff3575F9Fd0FD4fB4Cc8fcAD8Fd",
    "0xc3d6a8d76B304E0716b3227C00a83187340DC846",
  ];

  const depositToken = [
    "0x4D07Ba104ff254c19B443aDE6224f744Db84FB8A",
    "0x4D07Ba104ff254c19B443aDE6224f744Db84FB8A",
    "0xB7930c829cc1de1b37a3Bb9b477E33251DA15a50",
    "0xB7930c829cc1de1b37a3Bb9b477E33251DA15a50",
  ];

  const superToken = [
    "0x5883d51A8b4bC48252ae3Ce7EDD9B62903e40E13",
    "0x5883d51A8b4bC48252ae3Ce7EDD9B62903e40E13",
    "0xC169ADfdD6dbCFfb80DffAF2FCaAB9bF4820AF18",
    "0xC169ADfdD6dbCFfb80DffAF2FCaAB9bF4820AF18",
  ];

  const lock = await hre.ethers.deployContract("Sequencer", [
    poolAddress,
    depositToken,
    superToken,
  ]);

  await lock.waitForDeployment();

  console.log("contract deployed at address ", lock.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x75Ce802c479A31aAa88Cb0BDE13853128055586A
