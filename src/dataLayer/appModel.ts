import rawFlashcards from "../data/flashcards.json";
import { IFlashcard } from "./interfaces";
import * as config from "../config";

export const getAppData = () => {
	let appData = config.initialAppData;
	const localStorageAppData = localStorage.getItem("appData");
	if (localStorageAppData !== null) {
		appData = JSON.parse(structuredClone(localStorageAppData));
	}
	return appData;
};

const parseFlashcardBack = (rawBack: string): string[] => {
	let back = '';
	let imageIdCode = '';
	if (rawBack.includes('@@')) {
		const parts = rawBack.split('@@');
		back = parts[0];
		imageIdCode = parts[1];
	} else {
		back = rawBack;
	}
	return [back, imageIdCode];

}

const getTatoebaLanguageIdCode = (category: string): string => {
	console.log(category);
	switch (category) {
		case 'pl':
			return 'pol';
		case 'fr':
			return 'fra';
		case 'es':
			return 'spa';
		case 'da':
			return 'dan';
		default:
			return 'nnn';
	}
}

export const getFlashcards = () => {
	const appData = getAppData();
	const flashcards: IFlashcard[] = [];
	for (const rawFlashcard of rawFlashcards) {
		const [back, imageIdCode] = parseFlashcardBack(rawFlashcard.back);
		const flashcard: IFlashcard = {
			id: rawFlashcard.id,
			category: rawFlashcard.category,
			front: rawFlashcard.front,
			back,
			pronunciation: rawFlashcard.pronunciation,
			isOpen: false,
			status: "learning",
			whenMarkedAsWaiting: "",
			isLanguage: config.acceptedLanguages().includes(rawFlashcard.category),
			rank: config.defaultRank(),
			imageIdCode,
			tatoebaLanguageIdCode: getTatoebaLanguageIdCode(rawFlashcard.category)
		};
		flashcards.push(flashcard);
	}

	for (const metadataFlashcard of appData.metadataFlashcards) {
		const flashcard = flashcards.find((m) => m.id === metadataFlashcard.id);
		if (flashcard) {
			flashcard.status = metadataFlashcard.status;
			flashcard.whenMarkedAsWaiting = metadataFlashcard.whenMarkedAsWaiting;
			flashcard.rank = metadataFlashcard.rank ? metadataFlashcard.rank : config.defaultRank()
		}
	}

	flashcards.sort((a: IFlashcard, b: IFlashcard) => a.rank < b.rank ? 1 : -1);
	return flashcards;
};
