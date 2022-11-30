import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes/loginRoutes";
import cookieSession from "cookie-session";

import './controllers/LoginController';
import { router as controllerRouter } from "./controllers/decorators/controller";

const app = express();
const cookieOptions = { keys: ["1087-Bajjhsk377h-9282h-%3"] };

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession(cookieOptions));
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
