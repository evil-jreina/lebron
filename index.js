const Twitter = require("twitter");
const E = require("html-entities").Html5Entities;
require("dotenv").config();
const entites = new E();
const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const get = client
  .get("statuses/lookup", { id: "959298670742011904" })
  .then(f => f[0])
  .then(f => f.text)
  .then(entites.decode)
  .then(f => f.replace(/(const|let|var) *[a-zA-Z_0-9]+ *= */, ""))
  .then(eval)
  .then(f => f([0, 1, 2, 3], x => x * x))
  .then(x => {
    x;
  })
  .catch(err => {
    err;
  });
