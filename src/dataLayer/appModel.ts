import rawFlashcards from "../data/flashcards.json";
import { IFlashcard } from "./interfaces";

export const getFlashcards = () => {
	const flashcards:IFlashcard[] = [];
	for (const rawFlashcard of rawFlashcards) {
		const flashcard: IFlashcard = {
			id: rawFlashcard.id,
			category: rawFlashcard.category,
			front: rawFlashcard.front,
			back: rawFlashcard.back,
			pronunciation: rawFlashcard.pronunciation,
			isOpen: false
		}
		flashcards.push(flashcard);
	}
	return flashcards;
}