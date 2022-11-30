import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes/loginRoutes";
import cookieSession from "cookie-session";

const app = express();
const cookieOptions = { keys: ["1087-Bajjhsk377h-9282h-%3"] };

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession(cookieOptions));
app.use(router);

app.listen(3000, () => {
	console.log("Started on port 3000");
});
