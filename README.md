# Udacity Blockchain Capstone


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)


This project is a decentralized housing product is a part of the udacity Blokchain program projacts 

### How to run this project

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

download the project and install it's dependencies.

```sh
$ git clone https://github.com/Jahin0X01/Capstone_Real_Estate_Marketplace.git
$ cd Capstone_Real_Estate_Marketplace
$ npm install 
```
`Befor you compile again remove the build directory in the eth-contracts`
Compile and test

```sh
$ cd eth-contracts
$ truffle compile
$ truffle test .\test\TestERC721Mintable.js  
$ truffle test .\test\TestSolnSquareVerifier.js
$ truffle test .\test\TestSquareVerifier.js  
```
![image](https://drive.google.com/uc?export=view&id=1WFTbmwRqvyPrb95R0KqXYiILvA7ORIrA)
deploy to the rinkeby network

```sh
truffle migrate --network rinkeby
```
you will have the contract address SolnSquareVerifier as an output of the last step and all the output i have i save in the file "rinkeby migration info" .
`contract address:    0xf388B2DDbbad99e559e6DBA5Ba8629DF5819e8C8`
`account:             0x08d94E7b0Bd79A1050265C4fb9e98736d672F827`
 and you can check it in the etherscan and this is my address transactions in the rinkeby network 
https://rinkeby.etherscan.io/address/0x08d94E7b0Bd79A1050265C4fb9e98736d672F827
After the migration is finished we now will mint the tokens using myetherwallet 
https://www.myetherwallet.com/interface/interact-with-contract
all you need is the contract address we have in migration step and the ABI and you can find in the `eth-contracts\build\contracts\SolnSquareVerifier.json` and i add the file in the directory for the ABI named "Contracti-ABI"  
now after creating the tokens go to 
https://rinkeby.opensea.io/ then go to develop section and generate your marketplace after that add an existing contract and add your contract address and you will have your items like that 
https://rinkeby.opensea.io/assets/jahinhouse-v2 
## Al the follwing is the assets I creat 
#### First the assets that I have and sell them to the Highest offer
https://rinkeby.opensea.io/assets/0xf388b2ddbbad99e559e6dba5ba8629df5819e8c8/0
https://rinkeby.opensea.io/assets/0xf388b2ddbbad99e559e6dba5ba8629df5819e8c8/1
https://rinkeby.opensea.io/assets/0xf388b2ddbbad99e559e6dba5ba8629df5819e8c8/2
https://rinkeby.opensea.io/assets/0xf388b2ddbbad99e559e6dba5ba8629df5819e8c8/3
https://rinkeby.opensea.io/assets/0xf388b2ddbbad99e559e6dba5ba8629df5819e8c8/5
https://rinkeby.opensea.io/assets/0xf388b2ddbbad99e559e6dba5ba8629df5819e8c8/4
#### Second the assets that I Set them for the fixed price and buy them from five different account
https://rinkeby.opensea.io/assets/0xf388b2ddbbad99e559e6dba5ba8629df5819e8c8/11
https://rinkeby.opensea.io/assets/0xf388b2ddbbad99e559e6dba5ba8629df5819e8c8/10
https://rinkeby.opensea.io/assets/0xf388b2ddbbad99e559e6dba5ba8629df5819e8c8/7
https://rinkeby.opensea.io/assets/0xf388b2ddbbad99e559e6dba5ba8629df5819e8c8/8
https://rinkeby.opensea.io/assets/0xf388b2ddbbad99e559e6dba5ba8629df5819e8c8/9


### If you want to know how to Run ZoKrates and get the proof.json and the verifier.sol see the README in the zokrates\code\square 