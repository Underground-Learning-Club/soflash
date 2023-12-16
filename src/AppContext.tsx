import { createContext, useState } from "react";
import { IFlashcard } from "./dataLayer/interfaces";
import { getFlashcards } from "./dataLayer/appModel";

interface IAppContext {
	flashcards: IFlashcard[];
	handleToggleFlashcard: (flashcard: IFlashcard) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [flashcards, setFlashcards] = useState<IFlashcard[]>(getFlashcards());

	const handleToggleFlashcard = (flashcard: IFlashcard) => {
		flashcard.isOpen = !flashcard.isOpen;
		const _setFlashcards = structuredClone(flashcards);
		setFlashcards(_setFlashcards);
	};

	return (
		<AppContext.Provider
			value={{
				flashcards,
				handleToggleFlashcard
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
