import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const home = (request, response, next) => {
  console.log("I will respond.");
  next();
};

const login = (request, response) => {
  return response.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`✅Sever listening on port http://localhost${PORT} 🚀`);

app.listen(PORT, handleListening);
