const sum = (a: number, b: number): number => {
	return a + b;
};

const sum_1: (a: number, b: number) => number = (a, b) => {
	return a + b;
};

const sum_2 = (a: number, b: number) => a + b;

function divide(a: number, b: number): number {
	return a / b;
}

const logger = (message: string): void => {
	console.log(message);
};

const throwError = (message: string): never => {
	throw new Error(message);
};

// throwError("New Error");

// this line of code will never be reached
// logger("i'm logger");

const todaysWeather = {
	date: new Date(),
	weather: 'party cloudy'
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
	console.log(date);
	console.log(weather);
};

logWeather(todaysWeather);
