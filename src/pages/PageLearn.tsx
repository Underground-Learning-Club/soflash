import { useContext } from "react";
import { AppContext } from "../AppContext";
import * as tools from "../tools";

export const PageLearn = () => {
	const { flashcards } = useContext(AppContext);
	return (
		<>
			{flashcards.map((flashcard) => {
				return (
					<div key={flashcard.id} className="bg-gray-500 mb-3 p-3 rounded">
						<p className="smallcaps text-gray-700">
							{tools.getCategoryName(flashcard.category)}
						</p>
						<p className="text-xl font-semibold">{flashcard.front}</p>
						<p className="text-xl italic text-orange-900">{flashcard.back}</p>
						{flashcard.pronunciation && (
							<p className="text-xl font-mono text-gray-600">
								[{flashcard.pronunciation}]
							</p>
						)}
					</div>
				);
			})}
		</>
	);
};
