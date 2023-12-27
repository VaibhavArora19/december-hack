require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    opgoerli: {
      url: "https://opt-goerli.g.alchemy.com/v2/vGo2OCKMAn0nasqwipBY8tDjJY-Evrnr",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};
