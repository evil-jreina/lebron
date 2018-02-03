const load = require("./lebron/load");
const Twitter = require("twitter");
const getClient = config => new Twitter(config);
const library = require("./lebron/library");

const lebron = config => ({
  load: load(getClient(config)),
  library
});

module.exports = lebron;
