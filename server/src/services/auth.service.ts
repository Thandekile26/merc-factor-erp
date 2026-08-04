import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../repositories/user.repository";
import { generateToken } from "../utils/jwt";

export const register = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "ADMIN" | "MANAGER" | "RECEPTION" | "TECHNICIAN";
}) => {
  const existingUser = await findUserByEmail(data.email);

  if (existingUser) {
    throw new Error("User already exists.");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await createUser({
    ...data,
    password: hashedPassword,
  });

  const token = generateToken({
    id: user.id,
    role: user.role,
  });

  return {
    token,
    user,
  };
};

export const login = async (email: string, password: string) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    throw new Error("Invalid email or password.");
  }

  const token = generateToken({
    id: user.id,
    role: user.role,
  });

  return {
    token,
    user,
  };
};