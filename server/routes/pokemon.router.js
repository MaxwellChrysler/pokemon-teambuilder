const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const axios = require("axios");

// router.get("/", (req, res) => { // api get that is currently in the search page
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
    const nickname = req.body.name ; // this is a test. I want to default the nickname to be the name, this may be an issue later
    const img = req.body.officalArtShiny // done for the presentation to show the shiny offical vs sprite
    const officalArt = req.body.officalArt;
    const user_id = req.user.id;
    const type = req.body.type
    // const type2 = req.body.type2
    const weight = req.body.weight

    let postQuery = `INSERT INTO poke_stats ("pokeID","name","hp","attack","defense","spAttack","spDefense","speed","nickname","img", "officalArt", "user_id", "type", "weight")
  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`;
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
        officalArt,
        user_id,
        type,
        weight,
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



router.get('/', (req,res) =>{
  const queryText = `SELECT * FROM "poke_stats"  WHERE user_id = $1;`;
  
  pool.query(queryText, [req.user.id])
  .then(result => {
    res.send(result.rows)
  })
  .catch(err => {
    console.log('error geting poke', err);
    res.sendStatus(200); // For testing only, can be removed
  })
})


router.delete(`/:id`, (req, res) => {
	// endpoint functionality
  console.log('IN DELETE ROUTE', req.params.id);
  const queryText = `DELETE FROM "poke_stats" WHERE id=$1;`;
  pool.query(queryText, [req.params.id]) // or req.params.id
  .then(() => {
    res.sendStatus(200)
  })
  .catch((err) => {
    console.log('error deleting', err);
    res.sendStatus(500)
  })
});




module.exports = router;