const router = require('express').Router();

// importing the function written in store.db
const store = require('../Develop/db/store');

// takes the notes object stored in db.json and pulls it into here as an object
const { notes } = require('../Develop/db/db.json');

// const params = [req.body.params]
router.get('/notes/', (req, res) => {
    const id = req.params.id;
    console.log(id);
    // store.readfnc(notes)
    // .then(
    // res.json(notes));
});

router.post('/notes', (req, res) => {
    console.log(store.sayHello());
    // req.body.id = notes.length.toString();
        res.json(notes);
        notes.push(req.body);
        store.writefnc(notes);
        // console.log(req.body)
        // console.log(notes);
});

module.exports = router;