"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const loginRoutes_1 = require("./routes/loginRoutes");
const cookie_session_1 = __importDefault(require("cookie-session"));
const app = (0, express_1.default)();
const cookieOptions = { keys: ["1087-Bajjhsk377h-9282h-%3"] };
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)(cookieOptions));
app.use(loginRoutes_1.router);
app.listen(3000, () => {
    console.log("Started on port 3000");
});
