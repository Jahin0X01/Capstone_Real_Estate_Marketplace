
// migrating the appropriate contracts
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var verifier = artifacts.require('./verifier.sol');


module.exports = async (deployer) => {
  await deployer.deploy(verifier);
  await deployer.deploy(SolnSquareVerifier, verifier.address, "JahinHouse", "JHT");
};
