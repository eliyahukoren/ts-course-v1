const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40
};

// example of the bad use of tuple:
// bad, because of we see cola variable like (string | boolean | number)
// but actually we expect to get [string, boolean, number]
const cola = ['brown', true, 40];

// example of good tuple:
const pepsi: [string, boolean, number] = ['brown', true, 45];

// or just create type alias and then use
type Drink = [string, boolean, number];
const cocaCola: Drink = ['brown', true, 60];
