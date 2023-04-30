pragma solidity ^0.8.0;
// SPDX-License-Identifier: MIT
import "hardhat/console.sol";

contract SolidityTest {
   constructor(){
   }
   function getResult() public pure returns(uint){
      uint a = 1;
      uint b = 2;
      uint result = a + b;
      //global variable usage
    //   uint256 blocknumber=block.number;
    //   uint256 timeStamp=block.timestamp;
   //  address msgSender= msg.sender;
      return result;
   }
}