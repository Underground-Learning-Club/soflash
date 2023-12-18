/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState } from "react";
import {
	IAppData,
	IFlashcard,
	IMetadataFlashcard,
} from "./dataLayer/interfaces";
import * as appModel from "./dataLayer/appModel";
import * as config from "./config";

interface IAppContext {
	flashcards: IFlashcard[];
	handleToggleFlashcard: (flashcard: IFlashcard) => void;
	appData: IAppData;
	handleChangeUserName: (username: string) => void;
	handleMarkAsLearned: (flashcard: IFlashcard) => void;
	handleResetApplicationData: () => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [flashcards, setFlashcards] = useState<IFlashcard[]>(
		appModel.getFlashcards()
	);
	const [appData, setAppData] = useState<IAppData>(appModel.getAppData());

	const handleToggleFlashcard = (flashcard: IFlashcard) => {
		flashcard.isOpen = !flashcard.isOpen;
		const _setFlashcards = structuredClone(flashcards);
		setFlashcards(_setFlashcards);
	};

	const saveAppDataToLocalStorage = (_appData: IAppData) => {
		localStorage.setItem("appData", JSON.stringify(_appData));
	};

	const handleChangeUserName = (username: string) => {
		const _appData = structuredClone(appData);
		_appData.username = username;
		saveAppDataToLocalStorage(_appData);
		setAppData(_appData);
	};

	const handleMarkAsLearned = (flashcard: IFlashcard) => {
		const _appData = structuredClone(appData);
		const metadataFlashcard = appData.metadataFlashcards.find(
			(m) => m.id === flashcard.id
		);
		if (metadataFlashcard === undefined) {
			const _metadataFlashcard: IMetadataFlashcard =
				config.initialMetadataFlashcard;
			_metadataFlashcard.id = flashcard.id;
			_metadataFlashcard.status = "learned";
			_appData.metadataFlashcards.push(_metadataFlashcard);
		}
		saveAppDataToLocalStorage(_appData);
		setAppData(_appData);
		setFlashcards(appModel.getFlashcards());
	};

	// const handleMark = (flashcard: IFlashcard) => {
	// 	const _appData = structuredClone(appData);
	// 	const metadataFlashcard = appData.metadataFlashcards.find(
	// 		(m) => m.id === flashcard.id
	// 	);
	// 	if (metadataFlashcard === undefined) {
	// 		const _metadataFlashcard: IMetadataFlashcard =
	// 			config.initialMetadataFlashcard;
	// 		_metadataFlashcard.id = flashcard.id;
	// 		_metadataFlashcard.status = "learned";
	// 		_appData.metadataFlashcards.push(_metadataFlashcard);
	// 	}
	// 	saveAppDataToLocalStorage(_appData);
	// 	setAppData(_appData);
	// 	setFlashcards(appModel.getFlashcards());
	// };

	const handleResetApplicationData = () => {
		localStorage.clear();
		setFlashcards(appModel.getFlashcards());
	}

	return (
		<AppContext.Provider
			value={{
				flashcards,
				handleToggleFlashcard,
				appData,
				handleChangeUserName,
				handleMarkAsLearned: handleMarkAsLearned,
				handleResetApplicationData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
