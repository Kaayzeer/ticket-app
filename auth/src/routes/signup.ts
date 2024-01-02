import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import { signupBody } from "../../constants/body-constants";

const router = express.Router();

router.post("/api/users/signup", signupBody, (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send(errors.array());
  }

  const { email, password } = req.body;

  console.log("Creating a user...");

  res.send({});
});

export { router as signupRouter };
