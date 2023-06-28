const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const axios = require("axios");

// router.get("/", (req, res) => {
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => {
//       console.log("app axios get is working", response);
//       res.send(response.data);

//       // GET route code here
//     })
//     .catch((error) => {
//       console.log("error in pokemon router", error);
//     });
// });

router.get('/', (req,res) =>{
  const queryText = `SELECT * FROM "poke_stats"`;
  
  pool.query(queryText)
  .then(result => {
    res.send(result.rows)
  })
  .catch(err => {
    console.log('error geting poke', err);
    res.sendStatus(200); // For testing only, can be removed
  })
})

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
  if (req.isAuthenticated()) {
    // This is all the data that we are grabbing to put into the database
    const pokeID = req.body.id;
    const name = req.body.name;
    const hp = req.body.hp;
    const attack = req.body.attack;
    const defense = req.body.defense;
    const spAttack = req.body.spAttack;
    const spDefense = req.body.spDefense;
    const speed = req.body.speed;
    const nickname = null;
    const img = req.body.img;
    // const userID = req.body

    let postQuery = `INSERT INTO poke_stats ("pokeID","name","hp","attack","defense","spAttack","spDefense","speed","nickname","img")
  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`;
    pool
      .query(postQuery, [
        pokeID,
        name,
        hp,
        attack,
        defense,
        spAttack,
        spDefense,
        speed,
        nickname,
        img,
      ])
      .then((response) => {
        console.log("Post was sucessful", response);
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log("Error in pokemon router POST", err);
        res.sendStatus(500);

        // could add the if authenticaetd then
      });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
