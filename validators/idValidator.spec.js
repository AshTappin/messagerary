const idValidator = require("./idFormatValidator.js");

describe("ID validator", function() {
	it("Returns false if ID contains letters", () => expect(idValidator.isANumber("43ERR")).toBe(false)); 
	it("Returns true if ID is number in string", () => expect(idValidator.isANumber("43")).toBe(true));
	it("Returns true if ID is number", () => expect(idValidator.isANumber(43)).toBe(true));
})