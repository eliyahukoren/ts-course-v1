import { NextFunction, Request, Response, Router } from "express";
import { renderTemplate, TemplateType } from "../utils/templates";
import { get } from "./decorators/routes";
import { controller } from "./decorators/controller";

enum Routes {
	LOGIN = "/login",
	HOME = "/",
	LOGOUT = "/logout",
	PROTECTED = "/protected",
}

@controller("/")
class LoginController {
	
	@get("/login")
	getLogin(req: Request, res: Response): void {
		res.send(renderTemplate(TemplateType.LOGIN_FORM));
	}
}
