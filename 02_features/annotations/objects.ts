const user = {
	id: 1,
	fname: 'Eli',
	age: 52,
	coords: {
		lat: 135,
		lng: 7352
	},
	setAge: (age: number) => this.age = age
}

// destructuring with annotations of one property
const { fname }: { fname: string} = user;
console.log("fname:", fname);

const { setAge } = user;

// destructuring with annotations of one object property
const { coords: {lat, lng}}: { coords: {lat: number; lng: number}} = user;
console.log(`lat: ${lat}, lng: ${lng} !`);
