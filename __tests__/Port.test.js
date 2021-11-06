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
});