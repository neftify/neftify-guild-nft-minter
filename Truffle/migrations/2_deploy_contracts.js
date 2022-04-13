const NeftifyGuilds = artifacts.require("NeftifyGuilds");

module.exports = function (deployer) {
  deployer.deploy(NeftifyGuilds);
};
