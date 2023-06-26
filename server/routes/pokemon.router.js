const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      console.log("app axios get is working", response);
      res.send(response.data);

      // GET route code here
    })
    .catch((error) => {
      console.log("error in pokemon router", error);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
