import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageAdd = () => {
	let { flashcards } = useContext(AppContext);

	flashcards = flashcards.filter(m => m.isLanguage).sort((a,b) => a.category > b.category ? 1 : -1);

	return (
		<section className="pt-4">
			<p className="mb-3">Click words to explore meaning nueances or find new flashcards to add:</p>

			{flashcards.map((flashcard) => {
				return (
					<div className="mb-3"><span className="font-semibold">{flashcard.category}</span> -{' '}
						{flashcard.back.split(" ").map((word, index) => {
							return <>
								<span key={index}><a target="_blank" className="underline" href={`https://tatoeba.org/de/sentences/search?from=${flashcard.tatoebaLanguageIdCode}&query=${word}&to=eng`}>{word}</a></span>{" "}
							</>;
						})}
					</div>
				);
			})}
		</section>
	);
};
