/* eslint-disable @typescript-eslint/no-unused-vars */
import * as qfil from "./qtools/qfil.ts";
import * as qstr from "./qtools/qstr.ts";

const importContent = qfil.getTextFromFile("./dev/raw-flashcards.txt");
const lines = qstr.convertStringBlockToLines(importContent);

let category = "";
let processingFlashcard = false;
let front = "";
let back = "";
let linesProcessed = 0;
const flashcards = [];

for (const line of lines) {
	if (line === "//french") {
		category = "fr";
		continue;
	}
	if (line === "//spanish") {
		category = "es";
		continue;
	}
	if (line === "//polish") {
		category = "pl";
		continue;
	}

	if (line === "") {
		processingFlashcard = false;
	} else {
		if (linesProcessed === 0) {
			processingFlashcard = true;
			back = line;
			linesProcessed++;
		} else {
			processingFlashcard = false;
			front = line;

			const flashcard = {
				id: qstr.generateShortUUID(),
				category,
				front,
				back,
				pronunciation: "",
			};
			flashcards.push(flashcard);
		}
	}
}

const originalFlashcards = qfil.readJsonFile('./src/data/flashcards.json');

const newFlashcards = [...originalFlashcards, ...flashcards];

qfil.writeJsonFile('./src/data/flashcards.json', newFlashcards);
