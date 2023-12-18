import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageProfile = () => {
	const { appData, handleChangeUserName, handleResetApplicationData } = useContext(AppContext);

	return (
		<section className="pt-4">
			<form>
				<fieldset className="border border-green-800 rounded p-4">
					<div className="flex gap-3 items-center mb-4">
						<label htmlFor="fullName">User name:</label>
						<input className="p-1 rounded" onChange={(e) => handleChangeUserName(e.target.value)} type="text" value={appData.username} name="fullName" id="fullName" />
					</div>
					<div className="flex gap-3 items-center">
						<label htmlFor="fullName">Reset application data:</label>
						<button type="button" onClick={() => handleResetApplicationData()} className="bg-red-500 py-1 px-2 rounded flex gap-1 shadow-3 shadow-gray-500">RESET</button>
					</div>
				</fieldset>
			</form>
		</section>
	);
};
