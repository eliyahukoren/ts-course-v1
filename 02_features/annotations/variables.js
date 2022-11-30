// object literal
const point_js = {
	x: 6,
	y: 8,
};

// this line will work in the javascript,
// but will raise error in the development in TypeScript
point_js.x = "string";

class A {
	f () {
		console.log('class A')
	}
}

class B extends A {
	f(){
		console.log('class B');
	}
}
