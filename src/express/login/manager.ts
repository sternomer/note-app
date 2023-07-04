import { createToken } from "../../jwt/create";
import { getUser } from "../user/manager";

export const login = async (username: string, password: string) => {
  const user = await getUser(username);
  if (!user) throw new Error("cannot find unathorized");
  if (user.password !== password) throw new Error("cannot find unathorized");

  const token = createToken(username);
  return token;
};
