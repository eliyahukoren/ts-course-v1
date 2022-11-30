/*
	1. delete tsconfig.json file
	2. tsc --init --target ES5 --experimentalDecorators
	3. ts-node decorators.ts 
*/

@classDecorator
class Boat {
	@propDecorator("prop decorator")
	color: string = "red";

	get formattedColor(): string {
		return `This boat color is ${this.color}`;
	}

	@testDecorator
	pilot(): void {
		console.log("swish");
	}

	@logError
	move(): void {
		throw new Error("Just Error");
	}

	@messageText("Hi there")
	print(@paramDecorator msg: string): void {
		console.log(msg);
	}
}

function propDecorator(s: string){
	return function (target: any, key: string) {
		console.log(s);
	};
}

function paramDecorator(t: any, k: string, i: number){
	console.log(t, k, i)
}

function classDecorator(constructor: typeof Boat){
	console.log(constructor)
}

function messageText(value: string){
	return function (target: any, key: string, desc: PropertyDescriptor):void {
		desc.value(value);
	};
}

function logError(target: any, key: string, desc: PropertyDescriptor){
	const method = desc.value;

	try{
		method();
	}catch(e){
		console.log("Oops, boat was sun")
	}
}

function testDecorator(target: any, key: string): void{
	console.log('Target:', target);
	console.log('Key:', key);
}

new Boat().print('My text');