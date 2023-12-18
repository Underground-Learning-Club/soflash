import rawFlashcards from "../data/flashcards.json";
import { IFlashcard } from "./interfaces";

const localStorageAppData = localStorage.getItem("appData");
console.log(localStorageAppData);

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
