import { NEW_LINE, getCurrentEnvironment, getCurrentPageIdCode, getCurrentUrl } from "./qsys";

describe('getCurrentPageIdCode()', () => {
	it("the function exists", () => {
		expect(getCurrentPageIdCode()).toBe('');
	});
});

describe('getCurrentEnvironment()', () => {
	it("the function exists", () => {
		expect(getCurrentEnvironment()).toBe('production');
	});
});

describe('getCurrentUrl()', () => {
	it("the function exists", () => {
		expect(getCurrentUrl()).toBe('');
	});
});

describe('NEW_LINE()', () => {
	it("it returns a newline character", () => {
		expect(NEW_LINE()).toBe('\n');
	});
	it("it returns multiple newline characters", () => {
		expect(NEW_LINE(3)).toBe('\n\n\n');
	});
});