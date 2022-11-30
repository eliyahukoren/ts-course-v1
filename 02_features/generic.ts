export class ArrayOfNumbers {
	constructor(public collection: number[]){}

	get(index: number): number{
		return this.collection[index];
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}

	get(index: number): string {
		return this.collection[index];
	}
}

class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}

const a = new ArrayOfAnything<string>(['a', 'b', 'c']);

function printStrings(arr: string[]): void{
	for(let i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

function printNumbers(arr: number[]): void {
		for (let i = 0; i < arr.length; i++) {
			console.log(arr[i]);
		}
}

function printAnything<T>(arr: T[]): void{
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

const arrStrings = ['a','b','v'];
const arrNumbers = [1,2,3,4];

printAnything(arrStrings);
printAnything(arrNumbers);


// Generic constrains
class Car{
	print(){
		console.log("i'm a car")
	}
}

class House {
	print() {
		console.log("i'm a house");
	}
}

interface Printable {
	print():void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void{
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}


printHousesOrCars([new House(), new Car(), new House()]);