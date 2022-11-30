/*
	1. delete tsconfig.json file
	2. tsc --init --target ES5 --experimentalDecorators --emitDecoratorMetadata
	3. ts-node metadata.ts 
*/


import "reflect-metadata";

const plane = {
	color: "blue",
};

Reflect.defineMetadata("note", "hi there", plane);

console.log(plane);
console.log(Reflect.getMetadata('note', plane));

// attach metadata for object property
Reflect.defineMetadata('type', 'paint', plane, 'color');

// then read this metadata
const type = Reflect.getMetadata('type', plane, 'color');
console.log(type);

/*  ========================== ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ===================================  */
@controller
class Plane {
	color: string = 'red';

	@get('/')
	fly(): void {
		console.log('vrrrrr');
	}
}

// factory decorator definition
function get(path: string) {
	return function (target: Plane, key: string) {
		Reflect.defineMetadata("path", path, target, key);
	};
}

// decorator for a class have one argument of type constructor function
// so, we can use target: Function or like down below target: typeof Plane
function controller(target: typeof Plane){
	for(let key in target.prototype){
		const path = Reflect.getMetadata('path', target.prototype, key);
		console.log('key is:', key);
		console.log('path from decorator:', path)
	}
}

/*  ========================== ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ===================================  */