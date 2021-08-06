const express = require('express');

// takes the notes object stored in db.json and pulls it into here as an object
const { notes } = require('./Develop/db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

// declaring the api and html routes as variables for ease of use
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// required with every backend app, makes it work 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// use the routes located in the routes folder
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query);
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});