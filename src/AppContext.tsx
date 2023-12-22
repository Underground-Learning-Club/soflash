/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState } from "react";
import {
	IAppData,
	IFlashcard,
	IMetadataFlashcard,
} from "./dataLayer/interfaces";
import * as appModel from "./dataLayer/appModel";
import * as config from "./config";
import * as tools from "./tools";

interface IAppContext {
	flashcards: IFlashcard[];
	handleToggleFlashcard: (flashcard: IFlashcard) => void;
	appData: IAppData;
	handleChangeUserName: (username: string) => void;
	handleMarkAsLearned: (flashcard: IFlashcard) => void;
	handleResetApplicationData: () => void;
	handleMarkToTakeAgain: (flashcard: IFlashcard) => void;
	flashcardIsWaiting: (flashcard: IFlashcard) => boolean;
	handleChangeRank: (flashcard: IFlashcard, rank: number) => void;
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
		const metadataFlashcard = _appData.metadataFlashcards.find(
			(m) => m.id === flashcard.id
		);
		if (metadataFlashcard === undefined) {
			const _metadataFlashcard: IMetadataFlashcard =
				config.initialMetadataFlashcard;
			_metadataFlashcard.id = flashcard.id;
			_metadataFlashcard.status = "learned";
			_appData.metadataFlashcards.push(_metadataFlashcard);
		} else {
			metadataFlashcard.status = "learned";
		}
		saveAppDataToLocalStorage(_appData);
		setAppData(_appData);
		setFlashcards(appModel.getFlashcards());
	};

	const handleMarkToTakeAgain = (flashcard: IFlashcard) => {
		const _appData = structuredClone(appData);
		const metadataFlashcard = _appData.metadataFlashcards.find(
			(m) => m.id === flashcard.id
		);
		if (metadataFlashcard === undefined) {
			const _metadataFlashcard: IMetadataFlashcard =
				config.initialMetadataFlashcard;
			_metadataFlashcard.id = flashcard.id;
			_metadataFlashcard.status = "waiting";
			_metadataFlashcard.whenMarkedAsWaiting =
				tools.getDateAndTimeStamp();
			_appData.metadataFlashcards.push(_metadataFlashcard);
		} else {
			metadataFlashcard.status = "waiting";
			metadataFlashcard.whenMarkedAsWaiting =
				tools.getDateAndTimeStamp();
		}
		saveAppDataToLocalStorage(_appData);
		setAppData(_appData);
		setFlashcards(appModel.getFlashcards());
	};

	const handleResetApplicationData = () => {
		localStorage.clear();
		setAppData(config.initialAppData);
		setFlashcards(appModel.getFlashcards());
	};

	const flashcardIsWaiting = (flashcard: IFlashcard) => {
		if (flashcard.whenMarkedAsWaiting === "") {
			return false;
		} else {
			return !tools.isDateMoreThanMinutesAgo(
				flashcard.whenMarkedAsWaiting,
				config.minutesToWaitToLearnAgain()
			);
		}
	};

	const handleChangeRank = (flashcard: IFlashcard, rank: number) => {
		const _appData = structuredClone(appData);
		const metadataFlashcard = _appData.metadataFlashcards.find(
			(m) => m.id === flashcard.id
		);
		if (metadataFlashcard === undefined) {
			const _metadataFlashcard: IMetadataFlashcard =
				config.initialMetadataFlashcard;
			_metadataFlashcard.id = flashcard.id;
			_metadataFlashcard.rank = rank;
			_appData.metadataFlashcards.push(_metadataFlashcard);
		} else {
			metadataFlashcard.rank = rank;
		}
		saveAppDataToLocalStorage(_appData);
		setAppData(_appData);
		setFlashcards(appModel.getFlashcards());
	}
	
	return (
		<AppContext.Provider
			value={{
				flashcards,
				handleToggleFlashcard,
				appData,
				handleChangeUserName,
				handleMarkAsLearned,
				handleResetApplicationData,
				handleMarkToTakeAgain,
				flashcardIsWaiting,
				handleChangeRank
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
