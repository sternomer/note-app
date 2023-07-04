import jwt from "jsonwebtoken";
import envConfig from "../config/env.config";

export const verifyToken = (token: string) => {
  console.log(jwt.verify(token, envConfig.jwt.secret));

  if (!token) {
    throw new Error("unauthorized");
  }
  const user = jwt.verify(token, envConfig.jwt.secret);
  console.log(user, "VERIFY TOKEN");

  if (!user) {
    throw new Error("unauthorized");
  }
  return user;
};
