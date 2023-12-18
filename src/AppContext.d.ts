/// <reference types="react" />
import { IAppData, IFlashcard } from "./dataLayer/interfaces";
interface IAppContext {
    flashcards: IFlashcard[];
    handleToggleFlashcard: (flashcard: IFlashcard) => void;
    appData: IAppData;
    handleChangeUserName: (username: string) => void;
    handleMarkAsLearned: (flashcard: IFlashcard) => void;
    handleResetApplicationData: () => void;
    handleMarkToTakeAgain: (flashcard: IFlashcard) => void;
    flashcardIsWaiting: (flashcard: IFlashcard) => boolean;
}
interface IAppProvider {
    children: React.ReactNode;
}
export declare const AppContext: import("react").Context<IAppContext>;
export declare const AppProvider: React.FC<IAppProvider>;
export {};
