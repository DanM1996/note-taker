const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

class Store {
    sayHello() {
        return 'Hello';
    }
    readfnc() {
        return read('./Develop/db/db.json', 'utf8');
    }
    writefnc(notes) {
        return write('./Develop/db/db.json', JSON.stringify( {notes} ));
    }

};

module.exports = new Store();

// uuid - unique user id, use to create new id so we can delete by id