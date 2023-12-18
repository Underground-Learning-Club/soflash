import { IMetadataFlashcard } from "./interfaces";

export const initialAppData = {
	username: "Guest",
	metadataFlashcards: []
};

export const initialMetadataFlashcard:IMetadataFlashcard = {
	id: '',
	status: "learning",
	whenMarkedAsWaiting: ''
}
