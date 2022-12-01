import { NextFunction, Request, Response, Router } from "express";
import { renderTemplate, TemplateType } from "../utils/templates";

interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

enum Routes {
	LOGIN = "/login",
	HOME = "/",
	LOGOUT = "/logout",
	PROTECTED = "/protected",
}

function requireAuth(req: Request, res: Response, next: NextFunction) {

	// user logged in. so, we can continue serve 
	if (req.session && req.session.loggedIn) return next();

	// user not permitted to see this area
	const response = renderTemplate(
		TemplateType.ERROR_PAGE,
		"You are NOT permitted <a href='/login'>Login</a>"
	);
	
	res.status(403);
	res.send( response );
}

const router = Router();

router.get(Routes.PROTECTED, requireAuth, (req: Request, res: Response) => {
	res.send(
		renderTemplate(
			TemplateType.SUCCESS_ALERT,
			"Welcome to protected area. <a href='/logout'>Logout</a>"
		)
	);
});

router.get(Routes.HOME, (req: Request, res: Response) => {
	const response = req.session && req.session.loggedIn
			? renderTemplate(
					TemplateType.SUCCESS_ALERT,
					"You are logged in <a href='/logout'>Logout</a> or <a href='/protected'>See protected area</a>"
			)
			: renderTemplate(
					TemplateType.ERROR_PAGE,
					"You are NOT logged in <a href='/login'>Login</a>"
			);
	
	res.send( response );
});

router.get(Routes.LOGOUT, (req: Request, res: Response) => {
	req.session = undefined;
	res.redirect("/");
});




export { router };
