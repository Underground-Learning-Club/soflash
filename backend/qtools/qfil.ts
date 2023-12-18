/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import * as qstr from "./qstr.ts";
import * as qfil from "./qfil.ts";

/**
 * Creates a file with content
 *
 * qfil.createFile('../logs/log.txt', 'added item');
 *
 * (file is created)
 */
export const createFile = (pathAndFileName: string, content: string) => {
	fs.writeFileSync(pathAndFileName, content.trim());
};

/**
 * Adds a line to a specific point in a file
 *
 * qfil.addLineInFile(`./src/main.ts`, '@@FIRSTLINE', `import { ${idCodeSnakeCase} } from './examples/${idCodeSnakeCase}';`);
 *
 * (line is added)
 */
export const addLineInFile = (
	pathAndFileName: string,
	marker: string,
	additionalLine: string
) => {
	const content = fs.readFileSync(pathAndFileName, { encoding: "utf8" });
	const lines: string[] = qstr.convertStringBlockToLines(content);
	const newLines: string[] = [];
	let lineNumber = 1;
	for (const line of lines) {
		if (lineNumber === 1 && marker === "@@FIRSTLINE") {
			newLines.push(additionalLine);
		}
		const newLine = line;
		newLines.push(newLine);
		if (newLine.includes(marker)) {
			newLines.push(additionalLine);
		}
		lineNumber++;
	}
	const newContent = qstr.convertLinesToStringBlock(newLines);
	qfil.createFile(pathAndFileName, newContent);
};

export const getTextFromFile = (pathAndFileName: string) => {
	const text = fs.readFileSync(pathAndFileName, "utf8");
	return text;
};

export const readJsonFile = (filePath: string) => {
	const jsonData = fs.readFileSync(filePath, "utf8");
	const jsonObject = JSON.parse(jsonData);
	return jsonObject;
};

export const writeJsonFile = (filePath: string, data: any[]) => {
	const jsonData = JSON.stringify(data, null, 2);
	fs.writeFileSync(filePath, jsonData);
};
