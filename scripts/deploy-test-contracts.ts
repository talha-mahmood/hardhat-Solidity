import { run, ethers } from "hardhat";

async function main() {

  // await lock.deployed();
  const SolidityTest = await ethers.getContractFactory("SolidityTest");

  const solidityTest = await SolidityTest.deploy();

  await solidityTest.deployed();
  const txt1=await solidityTest.getResult()

  console.log("Txt1 = ",txt1.toString())

  console.log("Lock deployed to:", solidityTest.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });