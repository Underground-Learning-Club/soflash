/**
 * Returns a random number
 * 
 * const newLength = qmat.getRandomNumberBetween(3, icons.length);
 * 
 * 6
 */
export const getRandomNumberBetween = (min: number, max: number) => {
	return Math.floor(Math.random() * max) + min;
}

