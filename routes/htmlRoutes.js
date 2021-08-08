const router = require('express').Router();
const path = require('path');

// sets the /notes api call to merge with the notes.html page so it loads the data properly
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'))
});

// sets any other routes to merge with the index.html page so it loads the data properly
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'))
});
// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../Develop/public/index.html'))
// });

module.exports = router;