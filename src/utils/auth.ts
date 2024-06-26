import { compare, hash } from "bcryptjs";

export const hashPassword = async (password: string) => {
  const hashed = await hash(password, 10);
  return hashed;
};

export const verifyPassword = async (password: string, hashedPassword: string) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
