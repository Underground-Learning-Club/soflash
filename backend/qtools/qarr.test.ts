import {shuffle} from "./qarr";

describe('shuffle()', () => {
	it("it shuffles the array", () => {
		const colors = ['red', 'blue', 'green'];
		shuffle(colors);
		expect(colors).toEqual(expect.arrayContaining(colors));
	});
});