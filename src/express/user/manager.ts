import userModel from "./model";

export const createUser = async (username: string, password: string) => {
  try {
    return userModel.create({ username, password });
  } catch (err) {
    throw new Error(`cannot create ${err}`);
  }
};

export const getUser = async (username: string) => {
  console.log(username);

  const user = await userModel.findOne({ username });
  console.log(username);

  console.log(user);

  if (user) return user;
  throw new Error("cannot get user");
};

export const getUserById = async (id: string) => {
  const user = await userModel.findById(id);
  console.log(user);
  if (user) return user;
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
};
