import { Request, Response, NextFunction } from 'express';
import { renderTemplate, TemplateType } from '../utils/templates';
import { get, controller, bodyValidator, post} from './decorators';
import { AppRoutes } from "./decorators/AppRoutes";

const testUser = {
	email: 'eli@emails.ocm',
	password: '12345678',
} as const;

@controller("/auth")
class LoginController {
	@get(AppRoutes.LOGIN)
	getLogin(req: Request, res: Response): void {
		res.send(renderTemplate(TemplateType.LOGIN_FORM));
	}

	@get(AppRoutes.LOGOUT)
	getLogout(req: Request, res: Response) {
		req.session = undefined;
		res.redirect("/");
	}

	@post(AppRoutes.LOGIN)
	@bodyValidator("email", "password")
	postLogin(req: Request, res: Response) {
		// using body-parser package for parsing body
		const { email, password } = req.body;

		if (
			!email ||
			!password ||
			email !== testUser.email ||
			password !== testUser.password
		) {
			res.send(
				renderTemplate(TemplateType.ERROR_PAGE, "Invalid email or password")
			);
			return;
		}

		// mark person as logged in
		req.session = { loggedIn: true, user: { email } };

		// redirect to the root route
		res.redirect(AppRoutes.ROOT);
	}
}

console.log('Hi There');


