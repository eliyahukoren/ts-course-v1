//  with inference
const carMakers = ['toyota', 'mazda', 'ford'];

// or

const carMakers_1: string[] = [];

// or 2 dimensions array

const carMakers_2: string[][] = [];

const capitalize = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(
	carMakers.map( (car: string) : string => capitalize(car) )
);

// Multiple types
const dates = [new Date(), '2022-11-01', 1235346536];
// or just so
const dates_1: (string | Date | number)[] = [];
