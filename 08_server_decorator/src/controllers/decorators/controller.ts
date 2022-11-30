import "reflect-metadata";
import { AppRouter } from "../../AppRouter";


// class|constructor decorator
export function controller(routePrefix: string) {
	const router = AppRouter.getInstance();
	
	return function(target: Function){
		for(let key in target.prototype){
			const routerHandler = target.prototype[key];
			const path = Reflect.getMetadata('path', target.prototype, key);
			
			if(path){
				router.get(`${routePrefix}${path}`, routerHandler);
			}
		}
	}
}
