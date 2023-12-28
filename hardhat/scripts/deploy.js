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
    "0xaC7A5cf2E0A6DB31456572871Ee33eb6212014a9",
    "0xaC7A5cf2E0A6DB31456572871Ee33eb6212014a9",
    "0x0A14509Ce30137C3d648d446997752144478983C",
    "0x0A14509Ce30137C3d648d446997752144478983C",
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

// 0xf1d0DF4BBAAA0B70AbBbE672f6C30fF8b1De2541
