const router = require('express').Router();
const { v4: uuidv4 } = require('uuid')

// importing the function written in store.db
const store = require('../Develop/db/store');

// takes the notes object stored in db.json and pulls it into here as an object
const { notes } = require('../Develop/db/db.json');

router.get('/notes', (req, res) => {
    console.log(notes);
    res.json(notes);  
});

router.post('/notes', (req, res) => {
        let addedNote = req.body
        addedNote.id = uuidv4();
        res.json(notes);
        // appending the body (text) of the request (notes) to the notes database
        notes.push(addedNote);
        // writing the new note to the database
        store.writefnc(notes);
});

router.get('/notes/:id', (req, res) => {
    res.json(notes);
})

module.exports = router;