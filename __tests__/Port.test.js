/* globals describe it expect */
const Port = require("../src/Port.js");

describe("Port", () => {
	describe("with port", () => {
		let port;
		beforeEach(() => {
			port = new Port("Dover");
		});
		it("has name property", () => {
			expect(port.name).toBe("Dover");
		});

		it("can add a ship", () => {
			const ship = {};
			port.addShip(ship);
			expect(port.ships).toContain(ship);
		});

		it("can remove a ship", () => {
			const titanic = {};
			const olympic = {};
			port.addShip(titanic);
			port.addShip(olympic);
			port.removeShip(titanic);
			expect(port.ships).toEqual([titanic]);
		});
	});
	it("can be instantiated", () => {
		expect(new Port()).toBeInstanceOf(Object);
	});
});
