import "reflect-metadata";

// class|constructor decorator
export function controller(routePrefix: string) {
	return function(target: Function){
		for(let key in target.prototype){
			const routerHandler = target.prototype[key];
			const path = Reflect.getMetadata('path', target.prototype, key);
			
			
		}
	}
}
