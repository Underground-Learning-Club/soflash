import { createContext } from "react";
import { IFlashcard } from "./dataLayer/interfaces";
import { getFlashcards } from "./dataLayer/appModel";

interface IAppContext {
	flashcards: IFlashcard[]
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const flashcards = getFlashcards();

	return (
		<AppContext.Provider
			value={{
				flashcards
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
