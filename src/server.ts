import express, { Request, Response } from "express";
import randomFunction from "./common/utils";
import { protectedRoutes } from "./routes";
const app = express();

app.get("/", (req: Request, res: Response) => {
  req.header("ok");
  const ans: object = randomFunction(1, 2);
  res.send({ randomFunction: ans });
});

app.listen(1111, () => {
  console.log("started server");
});

app.use("/api", protectedRoutes);
