




const Lottery = artifacts.require("Lottery");
const LotteryNFT = artifacts.require("LotteryNFT");

let devAddress = "0x8b9CcC481ACf318843b0AE4a61014658Efa43EBF"
let WEED_ADDRESS = "0x4B4c5D87fa1aFE3365Fa1ee9cb6c38cC6FAB8fEf";
let minPrice = web3.utils.toWei('1');
let maxNumber = 14;
let owner = devAddress;
let adminAddress = owner;


module.exports = async function (deployer) {


  // //DEV1 
  await deployer.deploy(LotteryNFT);
  const lotteryNFTInstance = await LotteryNFT.deployed();
  await deployer.deploy(Lottery, WEED_ADDRESS, lotteryNFTInstance.address,
    minPrice, maxNumber, owner, adminAddress);

  await lotteryNFTInstance.transferOwnership(Lottery.address);





};
