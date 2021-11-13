/* globals describe it expect */
const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship", () => {
	describe("with ports and itinerary", () => {
		let ship;
		let dover;
		let calais;
		let itinerary;
		beforeEach(() => {
			dover = {
				addShip: jest.fn(),
				removeShip: jest.fn(),
				name: "Dover",
				ships: [],
			};
			//new Port("Dover");
			calais = {
				addShip: jest.fn(),
				removeShip: jest.fn(),
				name: "Calais",
				ships: [],
			};
			//new Port("Calais");
			itinerary = {
				ports: [dover, calais],
			};
			//new Itinerary([dover, calais]);
			ship = new Ship(itinerary);
		});
		it("can be instantiated", () => {
			expect(ship).toBeInstanceOf(Object);
		});
		it("has a starting port", () => {
			expect(ship.currentPort).toBe(dover);
		});
		it("can set sail", () => {
			ship.setSail();
			expect(ship.currentPort).toBeFalsy();
			expect(dover.removeShip).toHaveBeenCalledWith(ship);
		});
		it("gets added to port on instantiation", () => {
			expect(dover.addShip).toHaveBeenCalledWith(ship);
		});
		it("can dock at a different port", () => {
			ship.setSail();
			ship.dock();
			expect(ship.currentPort).toBe(calais);
			expect(calais.addShip).toHaveBeenCalledWith(ship);
		});
		it("cannot sail further than its itinerary", () => {
			ship.setSail();
			ship.dock();
			expect(() => ship.setSail()).toThrowError("End of itinerary reached");
		});
	});
});
