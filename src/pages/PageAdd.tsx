import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageAdd = () => {
	const { appData } = useContext(AppContext);

	return (
		<section className="pt-4">
			<p>add new flashcards</p>
		</section>
	);
};
