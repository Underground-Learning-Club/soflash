import { createContext } from "react";
import { IFlashcard } from "./dataLayer/interfaces";
import _flashcards from "./data/flashcards.json";

interface IAppContext {
	flashcards: IFlashcard[]
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const flashcards = _flashcards;

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
