import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageProfile = () => {
	const { appData, handleChangeUserName } = useContext(AppContext);

	return (
		<section className="pt-4">
			<form>
				<fieldset className="border border-green-800 rounded p-4">
					<div className="flex gap-3 items-center">
						<label htmlFor="fullName">User name:</label>
						<input className="p-1 rounded" onChange={(e) => handleChangeUserName(e.target.value)} type="text" value={appData.username} name="fullName" id="fullName" />
					</div>
				</fieldset>
			</form>
		</section>
	);
};
