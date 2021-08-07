const router = require('express').Router();

// importing the function written in store.db
const store = require('../Develop/db/store');

// takes the notes object stored in db.json and pulls it into here as an object
const { notes } = require('../Develop/db/db.json');

// const params = [req.body.params]

router.get('/notes', (req, res) => {
    return res.json(notes);
});

router.post('/notes', (req, res) => {
    console.log(store);
    req.body.id = notes.length.toString();
    res.json({
        message: 'success',
        res: notes,
        data: store
    })
});

module.exports = router;