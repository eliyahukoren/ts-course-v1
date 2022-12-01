import { NextFunction, Request, Response } from 'express';
import { RequestHandler } from 'express';
import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

function bodyValidators(keys: string): RequestHandler{
	return function(req: Request, res: Response, next: NextFunction){
		
	}
}

// class|constructor decorator
export function controller(routePrefix: string) {
	return function (target: Function) {
		const router = AppRouter.getInstance();
		for (let key in target.prototype) {
			const routerHandler = target.prototype[key];
			const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
			const method: Methods = Reflect.getMetadata(
				MetadataKeys.method,
				target.prototype,
				key
			);
			const middlewares = Reflect.getMetadata(
				MetadataKeys.middleware,
				target.prototype,
				key
			) || [];

			if (path) {
				router[method](`${routePrefix}${path}`, ...middlewares, routerHandler);
			}
		}
	};
}
