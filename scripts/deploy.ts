import { run, ethers } from "hardhat";

async function main() {

  // const Lock = await ethers.getContractFactory("Lock");

  // const lock = await Lock.deploy("Hello, Hardhat!");

  // await lock.deployed();
  const Lock = await ethers.getContractFactory("Lock");
  
  // Convert the string value to a bytes32 value
  const value = ethers.utils.formatBytes32String("Hello, Hardhat!");




  // // Convert the string value to a BigNumber
  // const value = ethers.BigNumber.from("Hello, Hardhat!");

  const lock = await Lock.deploy(value);

  await lock.deployed();

  console.log("Lock deployed to:", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });