const express = require("express");
const router = express.Router();

const pokemonData = require("./data");

router.get("/pokemon", async (req, res) => {
  try {
    res.send(pokemonData);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
