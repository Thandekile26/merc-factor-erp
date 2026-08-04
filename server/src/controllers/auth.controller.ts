import { Request, Response } from "express";
import { register, login } from "../services/auth.service";
import { registerSchema, loginSchema } from "../validators/auth.validator";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const data = registerSchema.parse(req.body);

    const result = await register(data);

    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const data = loginSchema.parse(req.body);

    const result = await login(data.email, data.password);

    res.json(result);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};