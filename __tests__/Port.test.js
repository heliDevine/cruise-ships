/* globals describe it expect */
const Port = require('../src/Port.js');

describe ('Port', () => {
    it ('can be instantiated',() => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('has name property', () => {
        const port = new Port('Ningbo');
        expect(port.name).toBe('Ningbo');
      });
    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship ={};
        port.addShip(ship);
        expect(port.ships).toContain(ship);
        });
    it ('can remove a ship', () => {
        const port = new Port ('Dover');
        const titanic = {};
        const olympic = {};
        port.addShip(titanic);
        port.addShip(olympic);
        port.removeShip(titanic);
        expect(port.ships).toEqual([titanic]);
    });

});