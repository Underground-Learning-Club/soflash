import { IFlashcard } from "../dataLayer/interfaces"
import * as tools from "../tools";

interface IProps {
	flashcard: IFlashcard;
}

export const Flashcard = ({ flashcard }: IProps) => {
	return (
					<div key={flashcard.id}>
						<div className="bg-orange-500 mt-4 p-3 rounded-t-lg">
							<p className="smallcaps text-gray-700">
								{tools.getCategoryName(flashcard.category)}
							</p>
							<p className="text-xl text-gray-800 font-semibold">
								{flashcard.front}
							</p>
						</div>
						{flashcard.isOpen && (
							<div className="bg-orange-400 p-3 rounded-b-lg">
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
	)
}