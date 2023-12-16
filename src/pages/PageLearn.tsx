import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Flashcard } from "../components/Flashcard";

export const PageLearn = () => {
	const { flashcards } = useContext(AppContext);
	return (
		<>
			{flashcards.map((flashcard) => {
				return (
					<Flashcard flashcard={flashcard}/>
				)
			})}
		</>
	);
};
