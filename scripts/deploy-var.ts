import { run, ethers } from "hardhat";

async function main() {

  // await lock.deployed();
  const VariableScope = await ethers.getContractFactory("VariableScope");

  const variableScope = await VariableScope.deploy();

  await variableScope.deployed();

  console.log("Lock deployed to:", variableScope.address);
  const data=await variableScope.age

//   console.log("Txt1 = ",txt1.toString())

//   console.log("Lock deployed to:", VariableScope.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });