const express = require('express');
const router = express.Router();
const store = require('../Develop/db/store');
// takes the notes object stored in db.json and pulls it into here as an object
const { notes } = require('../Develop/db/db.json');
const params = [req.body.params]

router.get('/notes', (req, res) => {
    console.log(req.query);
    return res.json(notes);
});

router.post('/notes', params, (req, res) => {
    
    if (err) {
        console.log(err);
    }
    res.json({
        message: 'success',
        res: notes
    })
})

module.exports = router;