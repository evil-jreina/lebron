const { expect } = require("chai");
const { config } = require("dotenv");

config();

const options = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
};
const lebron = require("../index")(options);
describe("lebron", () => {
  describe("#load", () => {
    describe("successes", () => {
      it("should load the map function", () => {
        const expected = [2, 4, 6, 8, 10, 12];
        const input = [1, 2, 3, 4, 5, 6];
        const xform = x => x + x;

        return lebron
          .load(lebron.library.Array.map)
          .then(map => map(input, xform))
          .then(actual => {
            expect(actual).to.deep.equal(expected);
            return actual;
          });
      });
    });
  });
});
