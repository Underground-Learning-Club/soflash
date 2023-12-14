export const getCategoryName = (categoryIdCode: string) => {
	switch (categoryIdCode) {
		case 'pl':
			return 'Polish';
		case 'fr':
			return 'French';
		case 'sp':
			return 'Spanish';
	}
}