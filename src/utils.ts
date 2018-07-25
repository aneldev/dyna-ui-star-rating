export const round = (value: number, digits: number): number => {
	return Math.round(value * Math.pow(10, digits)) / Math.pow(10, digits);
};