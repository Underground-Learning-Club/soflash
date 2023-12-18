export interface IMetadataFlashcard {
	id: string;
	status: "learning" | "learned" | "waiting";
	whenMarkedAsWaiting: string;
}

export interface IAppData {
	username: string;
	metadataFlashcards: IMetadataFlashcard[]
}
