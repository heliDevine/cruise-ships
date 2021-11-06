const Port = require('../src/Port.js');
class Ship {
    constructor() {
       //this.currentPort = new Port("Dover")
       //this.currentPort = new Port()
       this.currentPort = Port
    }

    setSail() {
        // if (!this.currentPort) {
        // rerurn; true
        //  } else { 
        //     return false
        // };
        this.currentPort =0;
    }
}

module.exports = Ship;

