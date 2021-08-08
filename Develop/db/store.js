const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

// class object to hold read and write file functions
class Store {
    // function reads the json file async
    readfnc() {
        return read('./Develop/db/db.json', 'utf8');
    }
    // function writes the data input into the db.json file and stringifies data 
    writefnc(notes) {
        return write('./Develop/db/db.json', JSON.stringify({ notes }, null, 2));
    }
};

module.exports = new Store();
