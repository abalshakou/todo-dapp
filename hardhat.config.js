require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/xD4qMo7gtckSzNwWfJMaaL4dCeg068N5",
      accounts: ["4a9a5668eeaa66fd7ded8769293eff3ff7cf6e5a6d4129273dea7a4724e33cbf"]
    },
  },
};
