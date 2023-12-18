import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Nav } from "./Nav";

export const Header = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			<div className="flex justify-between item">
				<h1 className="text-2xl mb-3 text-slate-800">
					Social Flashcards
				</h1>
				<p className="mt-1 smallcaps mr-2">{appData.username}</p>
			</div>
			<Nav />
		</>
	);
};


