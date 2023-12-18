/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { IFlashcard } from "./dataLayer/interfaces";
import { getFlashcards } from "./dataLayer/appModel";
import * as config from "./config";
import { IAppData, IMetadataFlashcard } from "./interfaces";

interface IAppContext {
	flashcards: IFlashcard[];
	handleToggleFlashcard: (flashcard: IFlashcard) => void;
	appData: IAppData; 
	handleChangeUserName: (username: string) => void;
	handleMarkedAsLearned: (flashcard: IFlashcard) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [flashcards, setFlashcards] = useState<IFlashcard[]>(getFlashcards());
	const [appData, setAppdata] = useState<IAppData>(config.initialAppData);

	const handleToggleFlashcard = (flashcard: IFlashcard) => {
		flashcard.isOpen = !flashcard.isOpen;
		const _setFlashcards = structuredClone(flashcards);
		setFlashcards(_setFlashcards);
	};

	useEffect(() => {
		let strAppData = localStorage.getItem("appData");
		let _appData:IAppData = {} as IAppData;
		if (strAppData === null) {
			strAppData = JSON.stringify(config.initialAppData);
			localStorage.setItem(
				"appData",
				strAppData
			);
		}
		_appData = JSON.parse(strAppData);
		setAppdata(_appData);
	}, []);

	const saveAppDataToLocalStorage = (_appData: IAppData) => {
		localStorage.setItem('appData', JSON.stringify(_appData));
	}

	const handleChangeUserName = (username: string) => {
		const _appData = structuredClone(appData);
		_appData.username = username;
		saveAppDataToLocalStorage(_appData);
		setAppdata(_appData);
	}

	const handleMarkedAsLearned = (flashcard: IFlashcard) => {
		const _appData = structuredClone(appData);
		const metadataFlashcard = appData.metadataFlashcards.find(m => m.id === flashcard.id);
		if (metadataFlashcard === undefined) {
			const _metadataFlashcard: IMetadataFlashcard = config.initialMetadataFlashcard;
			_metadataFlashcard.id = flashcard.id;
			_metadataFlashcard.status = "learned";
			_appData.metadataFlashcards.push(_metadataFlashcard)
		}
		saveAppDataToLocalStorage(_appData);
		setAppdata(_appData);
	}

	return (
		<AppContext.Provider
			value={{
				flashcards,
				handleToggleFlashcard,
				appData,
				handleChangeUserName,
				handleMarkedAsLearned
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
