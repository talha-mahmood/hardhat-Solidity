# Sample Hardhat Project

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
npx hardhat run scripts/deploy.ts
```
