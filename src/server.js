import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalrouter";
import videoRouter from "./router/videoRouter";
import userRouter from "./router/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`✅Sever listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
