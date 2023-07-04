import jwt from "jsonwebtoken";
import envConfig from "../config/env.config";

export const createToken = (id: string) => {
  return jwt.sign({ id }, envConfig.jwt.secret);
};
