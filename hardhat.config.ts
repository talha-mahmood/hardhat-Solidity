import * as dotenv from 'dotenv';

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import "hardhat-gas-reporter"
import "solidity-coverage"

dotenv.config();

task("accouts" , "Print the list of accoutns", async (taskArgs, hre)=> {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
})


const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    ropsten:{
      url: process.env.ROPSTER_URL || "",
      accounts: 
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
  }
};

export default config;