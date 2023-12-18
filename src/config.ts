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
	return 1;
}
