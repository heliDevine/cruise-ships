
class Ship {
    constructor(port) {
       //this.currentPort = new Port("Dover")
       //this.currentPort = new Port()
       this.currentPort = port;
    }

    setSail() {
        // if (!this.currentPort) {
        // rerurn; true
        //  } else { 
        //     return false
        // };
        this.currentPort =0;
    }
    dock(port) {
        this.currentPort = port;
    };
}

module.exports = Ship;

