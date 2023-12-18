import * as qsys from './qsys';

/**
 * Returns the last segment on the right in the URL
 * 
 * url = "http://localhost:3423/info"
 * 
 * const currentPageIdCode = qsys.getCurrentPageIdCode();
 * 
 * "info"
 */
export const getCurrentPageIdCode = () => {
	const url = qsys.getCurrentUrl();
	if (url) {
		const parts = url.split('/');
		return parts[parts.length - 1];
	} else {
		return '';
	}
}

/**
 * Returns either "development" or "environment"
 * 
 * if (qsys.getCurrentEnvironment() === 'development') {
 * 
 * true
 */
export const getCurrentEnvironment = () => {
	const currentUrl = qsys.getCurrentUrl();
	if (currentUrl.includes('//localhost') || currentUrl.includes('//127.0.0.1')) {
		return 'development';
	} else {
		return 'production';
	}
}

/**
 * Returns the current browser URL
 *
 * url = "http://localhost:3423/info"
 * 
 * const url = qsys.getCurrentUrl();
 * 
 * "http://localhost:3423/info"
 */
export const getCurrentUrl = () => {
	if (typeof window !== "undefined") {
		return window.location.href;
	} else {
		return '';
	}
}

/**
 * Returns appropriate newline character, e.g. \n or \r\n
 * 
 * r += qsys.NEW_LINE();
 * 
 * "\n"
 */
export const NEW_LINE = (numberOfNewLines = 1) => {
	const endOfLine = '\n';
	return endOfLine.repeat(numberOfNewLines);
};


