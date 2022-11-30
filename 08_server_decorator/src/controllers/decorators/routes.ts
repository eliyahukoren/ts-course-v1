import "reflect-metadata";


function routeBinder(method: string){
	return function (path: string){
		// this is the decorator factory, it sets up
		// the returned decorator function
		return function(target: any, key: string, desc: PropertyDescriptor){
			// this is the DECORATOR
			// it will be applied for a method and
			// path: function argument, key: method name 
			console.log('get decorator:', path, key)
			Reflect.defineMetadata('path', path, target, key)
			Reflect.defineMetadata('method', method, target, key)
		}
	}
}

export const get = routeBinder('get');
export const put = routeBinder('put');
export const post = routeBinder('post');
export const del = routeBinder('delete');
export const patch = routeBinder('patch');


