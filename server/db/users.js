import { prisma } from ".";
import bycrypt from "bcrypt";

export const createUser = (userData) => {
  const finalUserData = {
    ...userData,
    password: bycrypt.hashSync(userData.password, 10),
  };

  return prisma.user.create({
    data: finalUserData,
  });
};

export const getUserByUsername = (username) => {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
};
