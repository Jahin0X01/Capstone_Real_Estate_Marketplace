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
[![truffle test](https://res.cloudinary.com/marcomontalbano/image/upload/v1588509560/video_to_markdown/images/google-drive--1WFTbmwRqvyPrb95R0KqXYiILvA7ORIrA-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://drive.google.com/file/d/1WFTbmwRqvyPrb95R0KqXYiILvA7ORIrA/view?usp=sharing "truffle test")
deploy to the rinkeby network

```sh
truffle migrate --network rinkeby
```
you will have the contract address SolnSquareVerifier as an output of the last step and all the output i have i save in the file "rinkeby migration info".
#####  The follwing is the SolnSquareVerifier and Verifier Deploying info and thir ABI in the Both fils named "SolnSquareVerifier-ABI" and "Verifier-ABI"
```
 Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xd02ae772398c65524c41de06882b133787db7e1f01aa7d4ab122a4438f87fab8
   > Blocks: 0            Seconds: 6
   > contract address:    0xf388B2DDbbad99e559e6DBA5Ba8629DF5819e8C8
   > block number:        6420097
   > block timestamp:     1588456887
   > account:             0x08d94E7b0Bd79A1050265C4fb9e98736d672F827
```
```
   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x4ccf5fce7bdeef865cc586bcf6c19d3ed2c080ad1bef96f7f8f9c1773386ca56
   > Blocks: 1            Seconds: 21
   > contract address:    0x8385c93fcbb169c90f22e254776a1f67c78316d4
   > block number:        6420096
   > block timestamp:     1588456872
   > account:             0x08d94E7b0Bd79A1050265C4fb9e98736d672F827
```
##### if you need to know any additional info see the file "rinkeby migration info"
 and you can check it in the etherscan and this is my address transactions in the rinkeby network 
https://rinkeby.etherscan.io/address/0x08d94E7b0Bd79A1050265C4fb9e98736d672F827
After the migration is finished we now will mint the tokens using myetherwallet 
https://www.myetherwallet.com/interface/interact-with-contract
all you need is the contract address we have in migration step and the ABI and you can find in the `eth-contracts\build\contracts\SolnSquareVerifier.json`   
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


### Versions
```
Truffle v5.0.19 (core: 5.0.19)
Solidity - 0.5.6 (solc-js)
    solc: 0.5.6+commit.b259423e.Emscripten.clang
Node v12.16.3
Web3.js v1.0.0-beta.37
```


### If you want to know how to Run ZoKrates and get the proof.json and the verifier.sol see the README in the zokrates\code\square 
