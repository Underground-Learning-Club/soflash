import { IAppData } from "../interfaces";

export class AppDataManager {
	private appData:IAppData = {} as IAppData;

	constructor(appData = {} as IAppData) {
		this.appData = appData;
	}

	public setUsername(username: string) {
		this.appData.username = username;
	}
}