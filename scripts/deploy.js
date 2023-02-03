const hre = require("hardhat");

async function main() {
  
  const MoonToken = await hre.ethers.getContractFactory("MoonToken");
  const moonToken = await MoonToken.deploy();

  await moonToken.deployed();

  console.log(
    `MoonToken contract deployed to ${moonToken.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
