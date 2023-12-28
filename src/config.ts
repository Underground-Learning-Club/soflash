import { IAppData, IMetadataFlashcard } from "./dataLayer/interfaces";
import * as config from './config';

export const initialAppData:IAppData = {
	username: "Guest",
	metadataFlashcards: []
};

export const defaultRank = () => {
	return 2.5;
}

export const initialMetadataFlashcard:IMetadataFlashcard = {
	id: '',
	status: "learning",
	whenMarkedAsWaiting: '',
	rank: config.defaultRank()
}

export const minutesToWaitToLearnAgain = () => {
	return 30;
}

export const acceptedLanguages = () => {
	return ['pl', 'fr', 'es', 'da'];
}