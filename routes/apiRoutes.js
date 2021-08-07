const router = require('express').Router();

// importing the function written in store.db
const store = require('../Develop/db/store');

// takes the notes object stored in db.json and pulls it into here as an object
const { notes } = require('../Develop/db/db.json');

// const params = [req.body.params]
console.log(notes);
router.get('/notes', (req, res) => {
    store.readfnc().then(
    res.json(notes));
});

router.post('/notes', (req, res) => {
    console.log(store.sayHello());
    // req.body.id = notes.length.toString();
    
        results = res.json({
            message: 'success',
            res: notes
        });
        store.writefnc();
        console.log(store.readfnc());
        console.log(notes);
});

module.exports = router;