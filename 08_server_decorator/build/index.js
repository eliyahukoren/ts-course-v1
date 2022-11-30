"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var loginRoutes_1 = require("./routes/loginRoutes");
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controllers/LoginController");
var controller_1 = require("./controllers/decorators/controller");
var app = (0, express_1.default)();
var cookieOptions = { keys: ["1087-Bajjhsk377h-9282h-%3"] };
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)(cookieOptions));
app.use(loginRoutes_1.router);
app.use(controller_1.router);
app.listen(3000, function () {
    console.log("Listening on port 3000");
});
