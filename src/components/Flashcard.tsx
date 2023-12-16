import { useContext } from "react";
import { AppContext } from "../AppContext";
import { IFlashcard } from "../dataLayer/interfaces";
import * as tools from "../tools";

interface IProps {
	flashcard: IFlashcard;
}

export const Flashcard = ({ flashcard }: IProps) => {
	const { handleToggleFlashcard } = useContext(AppContext);
	return (
		<div>
			<div
				className="bg-orange-500 mt-4 p-3 rounded-t-lg cursor-pointer"
				onClick={() => handleToggleFlashcard(flashcard)}
			>
				<p className="smallcaps text-gray-700">
					{tools.getCategoryName(flashcard.category)}
				</p>
				<p className="text-xl text-gray-800 font-semibold">
					{flashcard.front}
				</p>
			</div>
			{flashcard.isOpen && (
				<div className="bg-orange-300 p-3 rounded-b-lg">
					<p className="text-xl italic text-black font-semibold">
						{flashcard.back}
					</p>
					{flashcard.pronunciation && (
						<p className="font-mono text-gray-600">
							[{flashcard.pronunciation}]
						</p>
					)}
				</div>
			)}
		</div>
	);
};
