var Hello = artifacts.require("./Hello.sol");
var Basic = artifacts.require("./Basic.sol");
var Login = artifacts.require("./Login.sol");
var Record = artifacts.require("./Record.sol");

module.exports = function(deployer) {
  deployer.deploy(Hello);
  deployer.deploy(Basic);
  deployer.deploy(Login);
  deployer.deploy(Record);

};
