
We will follow this getting started page

Create a Project Directory
Follow these steps
npm install --save-dev hardhat
npx hardhat
What do you want to do? · Create a TypeScript project
√ Hardhat project root: · E:\document\web 3 and metaverse\military academy\hardhat
√ Do you want to add a .gitignore? (Y/n) · y
√ Help us improve Hardhat with anonymous crash reports & basic usage data? (Y/n) 
· y
You need to install these dependencies to run the sample project:
npm install --save-dev "hardhat@^2.14.0" "@nomicfoundation/hardhat-toolbox@^2.0.0"
if you get following error:
npm ERR! code ERR_SOCKET_TIMEOUT
write following commands:
- npm config rm proxy
- npm config rm https-proxy

Select to create a basic project from the menu
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
npx hardhat compile
npx hardhat test
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.
You can run it using npx hardhat run:
$ npx hardhat run scripts/deploy.ts
Lock with 1 ETH deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3

Connecting a wallet or Dapp to Hardhat Network
To run Hardhat Network in this way, run npx hardhat node:
$ npx hardhat node
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

This will expose a JSON-RPC interface to Hardhat Network. To use it connect your wallet or application to http://127.0.0.1:8545.
If you want to connect Hardhat to this node, for example to run a deployment script against it, you simply need to run it using --network localhost.
To try this, start a node with npx hardhat node and re-run the deployment script using the network option:
TypeScript
JavaScript
npx hardhat run scripts/deploy.ts --network localhost
Congrats! You have created a project and compiled, tested and deployed a smart contract.

Try running some of the following tasks:
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help



