import { NavLink } from "react-router-dom";

export const Nav = () => {
	return <nav>
		<ul className="flex gap-4 bg-yellow-500 px-4 py-2 content rounded-lg">
			<li><NavLink to="/learn">Learn</NavLink></li>
			<li><NavLink to="/profile">Profile</NavLink></li>
			<li><NavLink to="/add">Add</NavLink></li>
		</ul>
	</nav>;
};
