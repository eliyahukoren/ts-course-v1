import "reflect-metadata";

export function get(path: string){
	// this is the decorator factory, it sets up
	// the returned decorator function
	return function(target: any, key: string, desc: PropertyDescriptor){
		// this is the DECORATOR
		// it will be applied for a method and
		// path: function argument, key: method name 
		Reflect.defineMetadata('path', path, target, key)
	}
}
