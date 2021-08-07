const fs = require('fs');
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

class Store {
    readfnc() {
        return read('/db.json', 'utf8');
    }
    writefnc(notes) {
        return write('/db.json', JSON.stringify(notes));
    }

};

module.exports = new Store();

// uuid - unique user id, use to create new id so we can delete by id