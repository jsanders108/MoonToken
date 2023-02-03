//SPDX-License-Identifier: MIT

pragma solidity >=0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract MoonToken is ERC20 {
  
    constructor() ERC20("MoonToken", "MOON"){
        _mint(msg.sender, 10000*10**18);
    }
}