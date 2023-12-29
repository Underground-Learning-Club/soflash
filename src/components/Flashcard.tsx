import { useContext } from "react";
import { AppContext } from "../AppContext";
import { IFlashcard } from "../dataLayer/interfaces";
import * as tools from "../tools";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaHourglassHalf } from "react-icons/fa";
import { RxSpeakerLoud } from "react-icons/rx";
import { Slider as FlashcardSlider } from "./ui/flashcardSlider";

interface IProps {
	flashcard: IFlashcard;
}

export const Flashcard = ({ flashcard }: IProps) => {
	const {
		handleToggleFlashcard,
		handleMarkAsLearned,
		handleMarkToTakeAgain,
		handleChangeRank
	} = useContext(AppContext);

	const handleOpenGoogleTranslate = (flashcard: IFlashcard) => {
		window.open(
			`https://translate.google.com/?sl=${flashcard.category}&tl=en&text=${flashcard.back}&op=translate`,
			"_blank"
		);
	};

	const handleSliderChange = (flashcard: IFlashcard, rank: number) => {
		handleChangeRank(flashcard,rank)
	};

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
				<>
					<div className="backArea bg-orange-300 p-3 rounded-b-lg flex justify-between gap-1">
						<div>
							<p className="text-xl italic text-black font-semibold">
								{flashcard.back}
							</p>
							{flashcard.pronunciation && (
								<p className="font-mono text-gray-600">
									[{flashcard.pronunciation}]
								</p>
							)}
							{flashcard.imageIdCode && (
								<img className="mt-3" src={`images/flashcards/${flashcard.imageIdCode}.png`}/>
							)}
						</div>
						<div>
							{flashcard.isLanguage && (
								<RxSpeakerLoud
									onClick={() =>
										handleOpenGoogleTranslate(flashcard)
									}
									className="text-3xl cursor-pointer"
								/>
							)}
						</div>
					</div>
					<div className="buttonArea mt-1 flex justify-between">
						<button
							onClick={() => handleMarkAsLearned(flashcard)}
							className="bg-green-500 py-1 px-2 rounded flex gap-1 shadow-3 shadow-gray-500"
						>
							<p>Learned</p>
							<FaRegThumbsUp className="mt-1" />
						</button>
						<button
							onClick={() => handleMarkToTakeAgain(flashcard)}
							className="bg-blue-500 py-1 px-2 rounded flex gap-1"
						>
							<FaHourglassHalf className="mt-1" />
							<p>Take Again</p>
						</button>
					</div>
					<div className="rankSlider">
						<FlashcardSlider
							defaultValue={[flashcard.rank]}
							onValueCommit={([i]) => handleSliderChange(flashcard, i)}
							min={0}
							max={5}
							step={0.01}
						/>
					</div>
				</>
			)}
		</div>
	);
};
