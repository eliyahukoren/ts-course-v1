interface IVehicle {
	name: string;
	year: number;
	broken: boolean;
	interior?: string;
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true
}

const oldToyota: IVehicle = {
	name: 'corolla',
	year: 1996,
	broken: false,
	interior: 'good'
}

const badPrintVehicle = (vehicle: { name: string, year: number, broken: boolean}): void => {
	console.log("bad");
}

const goodPrintVehicle = (vehicle: IVehicle): void => {
	console.log("good");
}

// all will work
badPrintVehicle(oldCivic);
goodPrintVehicle(oldCivic);


badPrintVehicle(oldToyota);
goodPrintVehicle(oldToyota);


interface IReportable {
	summary(): string;
}

interface IPaintable extends IReportable {
	paint(): void
}

const cookie = {
	summary(): string{ return 'i\'m cookie' }
}

const someCar = {
	name: 'bmw',
	summary(): string {
		return "i'm a car";
	},
	paint() {
		console.log(`paint ${this.name}`)
	},
}

const f = (item: IReportable) => {
	console.log(item.summary());
}

const f1 = (item: IPaintable) => {
	console.log(item.summary());
	item.paint();
}

f(cookie);
f1(someCar);


