import { replaceAll, isEmpty, convertLinesToStringBlock, convertStringBlockToLines, trimAllLinesInLinesArray, removeEmptyLinesFromLinesAtBeginningAndEnd, removeBlankLinesFromBeginning, convertSnakeCaseToKebabCase } from "./qstr";

describe('replaceAll()', () => {
	it("it can replace characters correctly", () => {
		expect(replaceAll('this-is-a-test', '-', '_')).toBe('this_is_a_test');
	});
	it("it can handle spaces on each side", () => {
		expect(replaceAll('   test', '-', '_')).toBe('   test');
		expect(replaceAll('test   ', '-', '_')).toBe('test   ');
		expect(replaceAll('   test   ', '-', '_')).toBe('   test   ');
	});
});

describe('isEmpty()', () => {
	it("it identifies a string of spaces as empty", () => {
		expect(isEmpty('    ')).toBe(true);
	});
	it("it identifies text as not empty", () => {
		expect(isEmpty('this is a test')).toBe(false);
	});
	it("it identifies undefined as empty", () => {
		expect(isEmpty(undefined)).toBe(true);
	});
	it("it identifies null as empty", () => {
		expect(isEmpty(null)).toBe(true);
	});
});

describe('convertLinesToStringBlock()', () => {
	it("it converts array to string correctly", () => {
		const lines = ['line1', 'line2', 'line3'];
		expect(convertLinesToStringBlock(lines)).toBe('line1\nline2\nline3');
	});
	it("it works with one array string", () => {
		const lines = ['line1'];
		expect(convertLinesToStringBlock(lines)).toBe('line1');
	});
});

describe('convertStringBlockToLines()', () => {
	it("it converts string to an array of strings correctly", () => {
		const content = 'line1\nline2\nline3';
		const lines = ['line1', 'line2', 'line3'];
		expect(convertStringBlockToLines(content)).toStrictEqual(lines);
	});
	it("it works if string block is empty", () => {
		const content = '';
		const lines = [];
		expect(convertStringBlockToLines(content)).toStrictEqual(lines);
	});
});

describe('trimAllLinesInLinesArray()', () => {
	it("it trims all lines correctly", () => {
		const lines = ['line1   ', 'line2', '  line3'];
		const trimmedLines = ['line1', 'line2', 'line3'];
		expect(trimAllLinesInLinesArray(lines)).toStrictEqual(trimmedLines);
	});
});

describe('removeEmptyLinesFromLinesAtBeginningAndEnd()', () => {
	it("it removes blank strings at beginning and end of a string array", () => {
		const lines = ['', 'line1', 'line2', 'line3', '', '  '];
		const trimmedLines = ['line1', 'line2', 'line3'];
		expect(removeEmptyLinesFromLinesAtBeginningAndEnd(lines)).toStrictEqual(trimmedLines);
	});
});

describe('removeBlankLinesFromBeginning()', () => {
	it("it removes blank strings from beginning of a string array", () => {
		const lines = ['', 'line1', 'line2', 'line3', '', '  '];
		const trimmedLines = ['line1', 'line2', 'line3', '', '  '];
		expect(removeBlankLinesFromBeginning(lines)).toStrictEqual(trimmedLines);
	});
});

describe('convertSnakeCaseToKebabCase()', () => {
	it("it converts successfully", () => {
		expect(convertSnakeCaseToKebabCase('general_item_001')).toBe('general-item-001');
	});
});