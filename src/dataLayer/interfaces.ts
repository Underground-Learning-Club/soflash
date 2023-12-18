export interface IMetadataFlashcard {
	id: string;
	status: "learning" | "learned" | "waiting";
	whenMarkedAsWaiting: string;
}

export interface IAppData {
	username: string;
	metadataFlashcards: IMetadataFlashcard[]
}

export interface IFlashcard {
	id: string;
	category: string;
	front: string;
	back: string;
	pronunciation: string;
	isOpen: boolean;
	status: "learning" | "learned" | "waiting"; 
}