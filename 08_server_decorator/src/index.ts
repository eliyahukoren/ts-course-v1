import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import './controllers/LoginController';
import "./controllers/RootController";
import { AppRouter } from "./AppRouter";

const app = express();
const cookieOptions = { keys: ["1087-Bajjhsk377h-9282h-%3"] };

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession(cookieOptions));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
