import {addLineInFile, createFile} from "./qfil.js";

const testPathAndFileName = './testing/test222.txt';

describe('createFile()', () => {
	it("function exists and executes without errors", () => {
		expect(createFile(testPathAndFileName, 'nnn')).toBe(undefined); 
	});
	// TODO: test if created file exists
});

describe('addLineInFile()', () => {
	it("function exists and executes without errors", () => {
		expect(addLineInFile(testPathAndFileName, 'nnn', 'line that was added')).toBe(undefined); 
	});
	it("function works with first line", () => {
		expect(addLineInFile(testPathAndFileName, '@@FIRSTLINE', 'the new first line')).toBe(undefined); 
	});
	// TODO: test if created file exists
});