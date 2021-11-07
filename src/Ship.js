
class Ship {
    constructor(currentPort) {
       //this.currentPort = new Port("Dover")
       //this.currentPort = new Port()
       this.currentPort = currentPort;
       this.previousPort = null;
    }

    setSail() {
        this.previousPort = this.currentPort;
        this.currentPort =null;
    }
    dock(port) {
        this.currentPort = port;
    };
}

module.exports = Ship;

