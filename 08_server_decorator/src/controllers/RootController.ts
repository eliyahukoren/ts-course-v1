import { Request, Response, NextFunction } from "express";
import { renderTemplate, TemplateType } from "../utils/templates";
import { get, controller, use } from "./decorators";
import { AppRoutes } from './decorators/AppRoutes';

function requireAuth(req: Request, res: Response, next: NextFunction) {
	// user logged in. so, we can continue serve
	if (req.session && req.session.loggedIn) return next();

	// user not permitted to see this area
	const response = renderTemplate(
		TemplateType.ERROR_PAGE,
		"You are NOT permitted <a href='/auth/login'>Login</a>"
	);

	res.status(403);
	res.send(response);
}

@controller('')
class RootController {

	@get(AppRoutes.ROOT)
	getRoot(req: Request, res: Response) {
		const response =
			req.session && req.session.loggedIn
				? renderTemplate(
						TemplateType.SUCCESS_ALERT,
						"You are logged in <a href='/auth/logout'>Logout</a> or <a href='/auth/protected'>See protected area</a>"
				)
				: renderTemplate(
						TemplateType.ERROR_PAGE,
						"You are NOT logged in <a href='/auth/login'>Login</a>"
				);

		res.send(response);
	}

	@get(AppRoutes.PROTECTED)
	@use(requireAuth)
	getProtected(req: Request, res: Response){
		res.send(
			renderTemplate(
				TemplateType.SUCCESS_ALERT,
				"Welcome to protected area. <a href='/auth/logout'>Logout</a>"
			)
		);
	}
}
