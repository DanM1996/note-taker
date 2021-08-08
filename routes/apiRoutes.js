const router = require('express').Router();
// npm that assigns unique id's to all data, allowing for id calls
const { v4: uuidv4 } = require('uuid')

// importing the function written in store.db
const store = require('../Develop/db/store');

// takes the notes object stored in db.json and pulls it into here as an object
const { notes } = require('../Develop/db/db.json');

// gets the data from db.json and loads it onto the notes.index page
router.get('/notes', (req, res) => {
    console.log(notes);
    res.json(notes);  
});

// updates the json file with all its existing data PLUS the new note typed into the text field when the save button is clicked
router.post('/notes', (req, res) => {
        let addedNote = req.body
        addedNote.id = uuidv4();
        res.json(notes);
        // appending the body (text) of the request (notes) to the notes database
        notes.push(addedNote);
        // writing the new note to the database
        store.writefnc(notes);
});

// pulls json data by its id and popualtes it into the text field
router.get('/notes/:id', (req, res) => {
    res.json(notes);
})

module.exports = router;