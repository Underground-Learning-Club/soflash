import { useContext } from "react";
import { AppContext } from "../AppContext";
import * as tools from "../tools";

export const PageLearn = () => {
	const { flashcards } = useContext(AppContext);
	return (
		<>
			{flashcards.map((flashcard) => {
				return (
					<div
						key={flashcard.id}
					>
						<div className="bg-orange-500 mb-3 p-3 rounded-t-lg">
						<p className="smallcaps text-gray-700">
							{tools.getCategoryName(flashcard.category)}
						</p>
						<p className="text-xl font-semibold">
							{flashcard.front}
						</p>
						</div>
						{flashcard.isOpen && (
							<>
								<p className="text-xl italic text-green-700 font-semibold">
									{flashcard.back}
								</p>
								{flashcard.pronunciation && (
									<p className="text-xl font-mono text-gray-600">
										[{flashcard.pronunciation}]
									</p>
								)}
							</>
						)}
					</div>
				);
			})}
		</>
	);
};
