import { IAppData, IMetadataFlashcard } from "./dataLayer/interfaces";

export const initialAppData:IAppData = {
	username: "Guest",
	metadataFlashcards: []
};

export const initialMetadataFlashcard:IMetadataFlashcard = {
	id: '',
	status: "learning",
	whenMarkedAsWaiting: ''
}

export const minutesToWaitToLearnAgain = () => {
	return 30;
}

export const acceptedLanguages = () => {
	return ['pl', 'fr', 'es'];
}