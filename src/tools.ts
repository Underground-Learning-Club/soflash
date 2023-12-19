import dayjs from "dayjs";
import * as tools from './tools';

export const getCategoryName = (categoryIdCode: string) => {
	switch (categoryIdCode) {
		case "pl":
			return "Polish";
		case "fr":
			return "French";
		case "es":
			return "Spanish";
		default:
			return tools.capitalizeFirstLetter(categoryIdCode); // linux --> Linux
	}
};

/**
 * getDataAndTimeStamp
 *
 * "2023-12-18 16:38:03"
 */
export const getDateAndTimeStamp = () => {
	const now = new Date();

	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");

	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0");

	const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

	return dateTimeString;
};

export const isDateMoreThanMinutesAgo = (dateTime: string, minutes: number) => {
	const date = dayjs(dateTime);
	const minutesDifference = dayjs().diff(date, "minutes");
	return minutesDifference >= minutes;
};

export const capitalizeFirstLetter = (text: string) => {
	return text[0].toUpperCase() + text.slice(1);
}
