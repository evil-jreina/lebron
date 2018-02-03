const Twitter = require("twitter");
const { Html5Entities } = require("html-entities");
const { head, prop } = require("ramda");
require("dotenv").config();
const { decode } = new Html5Entities();

const util = {
  clean: f => f.replace(/(const|let|var) *[a-zA-Z_0-9]+ *= */, "")
};

/**
 * Fetches a single function from a single Tweet.
 * @param {Twitter} client
 */
const fetchFunction = client => {
  /**
   *
   * @param {Number} id
   * @returns {Promise<Function>}
   */
  const fetch = id => {
    if (typeof id !== "number") {
      return Promise.resolve("ID must be a number!");
    } else {
      const promise = client
        .get("statuses/lookup", { id: "959298670742011904" })
        .then(head)
        .then(prop("text"))
        .then(decode)
        .then(util.clean)
        .then(eval);

      return promise;
    }
  };

  return fetch;
};

module.exports = fetchFunction;
