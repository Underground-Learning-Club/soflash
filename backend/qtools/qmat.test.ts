import {getRandomNumberBetween} from "./qmat.js";

describe('getRandomNumberBetween()', () => {
	it("it returns a number within range", () => {
		const min = 1, max = 3;
		expect(getRandomNumberBetween(min, max)).toBeGreaterThanOrEqual(min);
		expect(getRandomNumberBetween(min, max)).toBeLessThanOrEqual(max);
	});
});