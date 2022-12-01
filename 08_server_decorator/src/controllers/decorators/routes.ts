import { RequestHandler } from 'express';
import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

interface RouteHandlerDescriptor extends PropertyDescriptor {
	value?: RequestHandler
}

function routeBinder(method: string){
	return function (path: string){
		// this is the decorator factory, it sets up
		// the returned decorator function
		return function(target: any, key: string, desc: RouteHandlerDescriptor){
			// this is the DECORATOR
			// it will be applied for a method and
			// path: function argument, key: method name 
		
			Reflect.defineMetadata(MetadataKeys.path, path, target, key)
			Reflect.defineMetadata(MetadataKeys.method, method, target, key)
		}
	}
}

export const get = routeBinder(Methods.get);
export const put = routeBinder(Methods.put);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);


