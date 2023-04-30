pragma solidity ^0.8.0;
// SPDX-License-Identifier: MIT
import "hardhat/console.sol";

contract VariableScope {
    uint256 public age;
   
   function updateAge(uint256 _age) public{
    age=_age;
      
    
   }
}