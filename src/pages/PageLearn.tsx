import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Flashcard } from "../components/Flashcard";
import React from "react";

export const PageLearn = () => {
	const { flashcards } = useContext(AppContext);
	return (
		<>
			{flashcards.map((flashcard) => {
				return (
					<React.Fragment key={flashcard.id}>
						{flashcard.status !== "learned" && (
							<Flashcard
								flashcard={flashcard}
								key={flashcard.id}
							/>
						)}
					</React.Fragment>
				);
			})}
		</>
	);
};
