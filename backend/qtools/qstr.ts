import * as qsys from "./qsys.ts";
import * as qstr from "./qstr.ts";

/**
 * Replace all occurances in a string:
 *
 * qstr.replaceAll("This is a tost.", "o", "e");
 *
 * "This is a test."
 */
export const replaceAll = (text: string, search: string, replace: string) => {
	return text.split(search).join(replace);
};

/**
 * Check if a string is empty, undefined, null, etc.
 *
 * if(qstr.empty(text)) {
 *
 * true
 */
export const isEmpty = (line: string | undefined | null) => {
	if (line === undefined || line === null) {
		return true;
	} else {
		line = line.toString();
		if (line.trim() == "") {
			return true;
		} else {
			return false;
		}
	}
};

/**
 * Converts an array of strings to a string with newline characters
 *
 * const content = qstr.convertLinesToStringBlock(lines);
 *
 * "line1\nline2\nline3"
 */
export const convertLinesToStringBlock = (lines: string[]) => {
	let r = "";
	let index = 0;
	for (const line of lines) {
		r += line;
		if (index != lines.length - 1) {
			r += qsys.NEW_LINE();
		}
		index++;
	}
	return r;
};

/**
 * Converts a string with newline characters to an array of strings, one per line
 *
 * const lines: string[] = qstr.convertStringBlockToLines(content);
 *
 * ['line1', 'line2', 'line3']
 */
export const convertStringBlockToLines = (
	stringBlock: string,
	trimLines = true
) => {
	let roughLines: string[] = [];

	if (qstr.isEmpty(stringBlock)) {
		return [];
	}
	roughLines = stringBlock.split("\n");
	if (trimLines) {
		roughLines = qstr.trimAllLinesInLinesArray(roughLines);
	}
	roughLines = qstr.removeEmptyLinesFromLinesAtBeginningAndEnd(roughLines);
	return roughLines;
};

/**
 * Trims every string in a string array
 *
 * roughLines = ['line1  ', 'line2'];
 *
 * roughLines = qstr.trimAllLinesInLinesArray(roughLines);
 *
 * ['line1','line2']
 */
//
export const trimAllLinesInLinesArray = (lines: string[]) => {
	const newLines: string[] = [];
	lines.forEach(function (line) {
		const newLine = line.trim();
		newLines.push(newLine);
	});
	return newLines;
};

/**
 * Removes blank strings from the beginning and end of a string of arrays
 *
 * roughLines = ['', 'line1', 'line2', ''];
 *
 * roughLines = qstr.removeEmptyLinesFromLinesAtBeginningAndEnd(roughLines);
 *
 * ['line1','line2']
 */
//
export const removeEmptyLinesFromLinesAtBeginningAndEnd = (lines: string[]) => {
	lines = qstr.trimAllLinesInLinesArray(lines);
	lines = qstr.removeBlankLinesFromBeginning(lines);
	lines = lines.reverse();
	lines = qstr.removeBlankLinesFromBeginning(lines);
	lines = lines.reverse();
	return lines;
};

/**
 * Removes blank strings from the beginning of a string of arrays
 *
 * roughLines = ['', 'line1', 'line2'];
 *
 * roughLines = qstr.removeBlankLinesFromBeginning(roughLines);
 *
 * ['line1','line2']
 */
//
export const removeBlankLinesFromBeginning = (lines: string[]) => {
	const newLines: string[] = [];
	let trimmingBlanks = true;
	lines.forEach(function (line) {
		const newLine = line;
		if (trimmingBlanks && line == "") {
			//skip it since it is a preceding blank item
		} else {
			newLines.push(newLine);
			trimmingBlanks = false;
		}
	});
	return newLines;
};

/**
 * Replaces underscores with hyphens
 *
 * const idCodeSnakeCase = 'general_item_003';
 *
 * const idCodeKebabCase = qstr.convertSnakeCaseToKebabCase(idCodeSnakeCase);
 *
 * 'general-item-003'
 */
export const convertSnakeCaseToKebabCase = (text: string) => {
	return qstr.replaceAll(text, "_", "-");
};

export const generateShortUUID = () => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let shortUUID = "";

	for (let i = 0; i < 6; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		shortUUID += characters.charAt(randomIndex);
	}

	return shortUUID;
};
