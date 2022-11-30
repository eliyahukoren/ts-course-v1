import { Request, Response } from "express";
import { renderTemplate, TemplateType } from "../utils/templates";
import { get, controller} from './decorators';

enum Routes {
	LOGIN = "/login",
	HOME = "/",
	LOGOUT = "/logout",
	PROTECTED = "/protected",
}

@controller('/auth')
class LoginController {
	
	@get('/login')
	getLogin(req: Request, res: Response): void {
		res.send(renderTemplate(TemplateType.LOGIN_FORM));
	}
}

console.log('Hi There');


