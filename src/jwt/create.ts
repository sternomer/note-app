import jwt from "jsonwebtoken";
import envConfig from "../config/env.config";

export const createToken = (username: string) => {
  const token = jwt.sign({ username }, envConfig.jwt.secret);
  console.log(token, "token");
  return token;
};
