export interface IMetadataFlashcard {
	id: string;
	status: "learning" | "learned" | "waiting";
	whenMarkedAsWaiting: string;
	rank: number;
}

export interface IAppData {
	username: string;
	metadataFlashcards: IMetadataFlashcard[]
}

export interface IFlashcard extends IMetadataFlashcard {
	category: string;
	front: string;
	back: string;
	pronunciation: string;
	isOpen: boolean;
	isLanguage: boolean;
	imageIdCode: string;
	tatoebaLanguageIdCode: string;
}