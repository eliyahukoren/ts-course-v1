"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTemplate = exports.TemplateType = void 0;
var TemplateType;
(function (TemplateType) {
    TemplateType[TemplateType["LOGIN_FORM"] = 0] = "LOGIN_FORM";
    TemplateType[TemplateType["ERROR_PAGE"] = 1] = "ERROR_PAGE";
    TemplateType[TemplateType["SUCCESS_ALERT"] = 2] = "SUCCESS_ALERT";
})(TemplateType = exports.TemplateType || (exports.TemplateType = {}));
var loginFormTemplate = "\n\t<div class=\"row justify-content-center\">\n\t\t<div class=\"col-12\"><h1 class=\"text-center\">Login Form</h1></div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-4\"></div>\n\t\n\t\t<div class=\"col-4\">\n\t\t\t<form method=\"POST\">\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label for=\"email\" class=\"form-label\">Email</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"email\" value=\"eli@emails.ocm\" id=\"email\" name=\"email\" aria-describedby=\"emailHelp\">\n\t\t\t\t\t<div id=\"emailHelp\" class=\"form-text\">We'll never share your email with anyone else.</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label for=\"password\" class=\"form-label\">Password</label>\n\t\t\t\t\t<input type=\"password\" value=\"12345678\" class=\"form-control\" id=\"password\" name=\"password\">\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\t\t\t</form>\n\t\t</div>\n\t\n\t\t<div class=\"col-4\"></div>\n\t</div>\n";
var alertDanger = function (text) {
    return "\n\t\t<div class=\"alert alert-danger my-5\" role=\"alert\">\n\t\t\t".concat(text, "\n\t\t</div>\n\t");
};
var alertSuccess = function (text) {
    return "\n\t\t<div class=\"alert alert-success my-5\" role=\"alert\">\n\t\t\t".concat(text, "\n\t\t</div>\n\t");
};
var renderPage = function (html) {
    return "\n\t\t<!DOCTYPE html>\n\t\t<html lang=\"en\">\n\t\t<head>\n\t\t\t<meta charset=\"UTF-8\">\n\t\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t\t\t<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC\" crossorigin=\"anonymous\">\n\t\t\t<title>Server</title>\n\t\t</head>\n\t\t<body>\n\t\t\t<div class=\"container\">\n\t\t\t\t".concat(html, "\n\t\t\t</div>\n\t\t</body>\n\t\t</html>\n\t");
};
var renderTemplate = function (type, text) {
    if (text === void 0) { text = ''; }
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
