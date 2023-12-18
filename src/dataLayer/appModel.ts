import rawFlashcards from "../data/flashcards.json";
import { IFlashcard } from "./interfaces";
import * as config from "../config";

let appData = config.initialAppData;
const localStorageAppData = localStorage.getItem("appData");
if (localStorageAppData !== null) {
	appData = JSON.parse(structuredClone(localStorageAppData));
}
console.log(appData);

export const getFlashcards = () => {
	const flashcards: IFlashcard[] = [];
	for (const rawFlashcard of rawFlashcards) {
		const flashcard: IFlashcard = {
			id: rawFlashcard.id,
			category: rawFlashcard.category,
			front: rawFlashcard.front,
			back: rawFlashcard.back,
			pronunciation: rawFlashcard.pronunciation,
			isOpen: false,
			status: "learning",
		};
		flashcards.push(flashcard);
	}

	return flashcards;
};
