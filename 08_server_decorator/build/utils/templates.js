"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTemplate = exports.TemplateType = void 0;
var TemplateType;
(function (TemplateType) {
    TemplateType[TemplateType["LOGIN_FORM"] = 0] = "LOGIN_FORM";
    TemplateType[TemplateType["ERROR_PAGE"] = 1] = "ERROR_PAGE";
    TemplateType[TemplateType["SUCCESS_ALERT"] = 2] = "SUCCESS_ALERT";
})(TemplateType = exports.TemplateType || (exports.TemplateType = {}));
const loginFormTemplate = `
	<div class="row justify-content-center">
		<div class="col-12"><h1 class="text-center">Login Form</h1></div>
	</div>
	<div class="row">
		<div class="col-4"></div>
	
		<div class="col-4">
			<form method="POST">
				<div class="mb-3">
					<label for="email" class="form-label">Email</label>
					<input class="form-control" type="email" value="eli@emails.ocm" id="email" name="email" aria-describedby="emailHelp">
					<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div class="mb-3">
					<label for="password" class="form-label">Password</label>
					<input type="password" value="12345678" class="form-control" id="password" name="password">
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		</div>
	
		<div class="col-4"></div>
	</div>
`;
const alertDanger = (text) => {
    return `
		<div class="alert alert-danger my-5" role="alert">
			${text}
		</div>
	`;
};
const alertSuccess = (text) => {
    return `
		<div class="alert alert-success my-5" role="alert">
			${text}
		</div>
	`;
};
const renderPage = (html) => {
    return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
			<title>Server</title>
		</head>
		<body>
			<div class="container">
				${html}
			</div>
		</body>
		</html>
	`;
};
const renderTemplate = (type, text) => {
    switch (type) {
        case TemplateType.LOGIN_FORM:
            return renderPage(loginFormTemplate);
        case TemplateType.ERROR_PAGE:
            return renderPage(alertDanger(text));
        case TemplateType.SUCCESS_ALERT:
            return renderPage(alertSuccess(text));
        default:
            return renderPage("<h1>Template not specified</h1>");
    }
};
exports.renderTemplate = renderTemplate;
