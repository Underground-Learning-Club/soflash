import { createContext, useEffect, useState } from "react";
import { IFlashcard } from "./dataLayer/interfaces";
import { getFlashcards } from "./dataLayer/appModel";
import * as config from "./config";
import { IAppData } from "./interfaces";

interface IAppContext {
	flashcards: IFlashcard[];
	handleToggleFlashcard: (flashcard: IFlashcard) => void;
	appData: IAppData; 
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [flashcards, setFlashcards] = useState<IFlashcard[]>(getFlashcards());
	const [appData, setAppdata] = useState<IAppData>({} as IAppData);

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

	return (
		<AppContext.Provider
			value={{
				flashcards,
				handleToggleFlashcard,
				appData
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
