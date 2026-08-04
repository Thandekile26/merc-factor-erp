import prisma from "../config/prisma";

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const findUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};

export const createUser = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "ADMIN" | "MANAGER" | "RECEPTION" | "TECHNICIAN";
}) => {
  return prisma.user.create({
    data,
  });
};