const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const axios = require("axios");

router.put('/:id', (req, res )=> {
    const updatedName = [req.params.id, req.body.nickname]
    console.log('test name', updatedName)
    console.log('in put to update nickname',req.params.id ) // this is so we see the id of the pokemon we want to update
    
  
    const queryText = `UPDATE "poke_stats" SET  nickname=$2  WHERE id=$1;`;
    pool.query(queryText,updatedName)
    
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log('error updating', err);
      res.sendStatus(500)
    })
  });

module.exports = router;