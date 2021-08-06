const express = require('express');
const router = express.Router();
// takes the notes object stored in db.json and pulls it into here as an object
const { notes } = require('../Develop/db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    console.log(req.query);
    res.json(results);
});

module.exports = router;