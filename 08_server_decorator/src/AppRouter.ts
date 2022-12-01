import express from 'express';

export class AppRouter {
	private static instance: express.Router;

	//  BTW: good example of the Singleton pattern 
	static getInstance(): express.Router {
		if (!AppRouter.instance){
			AppRouter.instance = express.Router();
		}

		return AppRouter.instance;
	}
}
