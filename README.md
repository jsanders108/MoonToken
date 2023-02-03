This is a full-stack React and Solidity app which connects to an ERC20 smart contract deployed on Ethereum's Goerli testnet. Visitors to the page can connect to the smart contract (via Metamask) to view basic stats about a newly created token called "MoonToken". 

The app has multiple components. First, I created a Solidity ERC20 smart contract, which I then compiled and deployed to the Goerli Ethereum Testnet using Hardhat and Visual Studio Code. The smart contract created a new ERC20 token called "MoonToken". Next, I connected the React files to the Solidity smart contract on Goerli via Web3.js.

To use the app, one needs to install Metamask to their browser and connect it to the Goerli Ethereum testnet. 

The smart contract can be viewed on the Goerli Testnet Explorer at the following website: https://goerli.etherscan.io/address/0x87AbaAD3F371650E012bbeA2BB4396Ff1E9914Ed

The app can be accessed at the following website: https://moon-token.netlify.app/
