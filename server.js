const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// declaring the api and html routes as variables for ease of use
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// recognizes the incoming request object as strings or arrays
app.use(express.urlencoded({ extended: true }));
// recognizes and converts incoming request data into json so it works with our code
app.use(express.json());
app.use(express.static('./Develop/public'));


// use the routes located in the routes folder
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port http://localhost/${PORT}!`);
});