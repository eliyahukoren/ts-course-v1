let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

// type annotation example:
let someNumber: number = 6;

// type inference example:
let someNumber2 = 7;
// both definition will show number.
// but, if we define like this:
let someNumber3;
someNumber3 = "string";
// will show, any.

let nothingMuch: null = null;

// Build in objects
let now: Date = new Date();

// array
let color: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

// classes
class Car {}
let car: Car = new Car();

// object literal
const point_js = {
	x: 6,
	y: 8,
};

// See file variables.js
// this line will work in the javascript,
// but will raise error in the development in TypeScript
// point_js.x = "string";

interface IPoint {
	x: number;
	y: number;
}

const point_ts_interface: IPoint = {
	x: 10,
	y: 20,
};

const point_ts_inline: { x: number; y: number } = {
	x: 5,
	y: 7,
};

function anyTest(a: IPoint, b, c): void {
	// console.log(a.x, b.)
	// pass
}

// when try to use this function we will see hint of function arguments:
// literalTest2(a:{ color: string, opacity: number}): void
// it will help to provide the right type of parameters

function literalTest2(a: { color: string; opacity: number }) {}

/*            FUNCTION ANNOTATION           */

// meaning, function "logNumber" waiting for a "number" i and will return void
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

// When to use annotations ?
// 1) Function that returns 'any' type
/*
	'false'        -> JSON.parse() -> boolean
	'4'            -> JSON.parse() -> number
	'{"a": 5}'     -> JSON.parse() -> {a: number}
	'{"b": "red"}' -> JSON.parse() -> {b: string}
*/

const json = '{"x" : 10, "y": 20}';

const coordinates = JSON.parse(json);
console.log(coordinates); // returns {x: 10, y: 20}

// for fix it:
const coordinates_ts: { x: number; y: number } = JSON.parse(json);

// 3) Variable whose type cannot be inferred correctly
let numbers_3 = [-1, -2, 12];
let numbersAboveZero: boolean | number = false;

numbers_3.forEach((n) => {
	if (n > 0) {
		numbersAboveZero = n;
	}
});
