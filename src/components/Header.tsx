import { Nav } from "./Nav";

export const Header = () => {
	return (
		<>
			<div className="flex justify-between item">
				<h1 className="text-2xl mb-3 text-slate-800">
					Social Flashcards
				</h1>
				<p className="mt-1 smallcaps">Guest</p>
			</div>
			<Nav />
		</>
	);
};
