"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var templates_1 = require("../utils/templates");
var Routes;
(function (Routes) {
    Routes["LOGIN"] = "/login";
    Routes["HOME"] = "/";
    Routes["LOGOUT"] = "/logout";
    Routes["PROTECTED"] = "/protected";
})(Routes || (Routes = {}));
function requireAuth(req, res, next) {
    // user logged in. so, we can continue serve 
    if (req.session && req.session.loggedIn)
        return next();
    // user not permitted to see this area
    var response = (0, templates_1.renderTemplate)(templates_1.TemplateType.ERROR_PAGE, "You are NOT permitted <a href='/login'>Login</a>");
    res.status(403);
    res.send(response);
}
var router = (0, express_1.Router)();
exports.router = router;
router.get(Routes.PROTECTED, requireAuth, function (req, res) {
    res.send((0, templates_1.renderTemplate)(templates_1.TemplateType.SUCCESS_ALERT, "Welcome to protected area. <a href='/logout'>Logout</a>"));
});
router.get(Routes.HOME, function (req, res) {
    var response = req.session && req.session.loggedIn
        ? (0, templates_1.renderTemplate)(templates_1.TemplateType.SUCCESS_ALERT, "You are logged in <a href='/logout'>Logout</a> or <a href='/protected'>See protected area</a>")
        : (0, templates_1.renderTemplate)(templates_1.TemplateType.ERROR_PAGE, "You are NOT logged in <a href='/login'>Login</a>");
    res.send(response);
});
router.get(Routes.LOGOUT, function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
router.post(Routes.LOGIN, function (req, res) {
    // using body-parser package for parsing body
    var _a = req.body, email = _a.email, password = _a.password;
    if (!email ||
        !password ||
        email !== "eli@emails.ocm" ||
        password !== "12345678") {
        res.send((0, templates_1.renderTemplate)(templates_1.TemplateType.ERROR_PAGE, "Invalid email or password"));
        return;
    }
    // mark person as logged in
    req.session = { loggedIn: true, user: { email: email } };
    // redirect to the root route
    res.redirect(Routes.HOME);
});
