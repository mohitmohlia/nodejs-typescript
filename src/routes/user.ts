import express, { Response, Request } from "express";

const userRoute = express.Router();

userRoute.get("/", (req: Request, res: Response) => {
  res.statusCode = 201;
  res.send("Get All Users");
});

export { userRoute };
