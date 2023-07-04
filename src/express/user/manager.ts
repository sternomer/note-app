import { createToken } from "../../jwt/create";
import userModel from "./model";

export const login = async (userId: string) => {
    try {
        const user = await getUser(userId);
        if (!user) throw new Error("cannot find unathorized");
        const token = createToken(userId);
        return token;
    } catch (err) {
        throw new Error(`cannot login ${err}`);
    }
};
    


export const createUser = async (username: string) => {
  try {
    return userModel.create({
      username,
    });
  } catch (err) {
    throw new Error(`cannot create ${err}`);
  }
};

export const getUser = async (id: string) => {
  const user = await userModel.findById(id);
  if (user) return user.username;
  throw new Error("cannot get user");
};

export const updateUser = async (id: string, note: number) => {
  const updatedUser = await userModel.findByIdAndUpdate(
    { _id: id },
    { $inc: { notes: note } },
    { new: true }
  );
  console.log(updatedUser);

  if (updatedUser) return updateUser;
  throw new Error("cannot update user");
};

export const deleteUser = async (id: string) => {
    const deleted = await userModel.deleteOne({ id });
    if (!deleted) throw new Error("cannot delete");
    }
    
