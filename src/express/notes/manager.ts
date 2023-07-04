import noteModel from "./model";
import { updateUser } from "../user/manager";

export const createNote = async (userId: string, note: any) => {
  try {
    const createdNote = noteModel.create({
      content: note,
    });
    await updateUser(userId, 1);
    return createdNote;
  } catch (err) {
    throw new Error(`cannot create ${err}`);
  }
};

export const getNote = async (id: string) => {
  const note = await noteModel.findById(id);
  if (note) return note.content;
  throw new Error("cannot get note");
};

export const updateNote = async (id: string, content: string) => {
  // body => content
  const updatedNote = await noteModel.findByIdAndUpdate(
    { _id: id },
    { content }
  );
  console.log(updatedNote);

  if (updatedNote) return updateNote;
  throw new Error("cannot update note");
};

export const deleteNote = async (userId: string, id: string) => {
  try {
    await noteModel.deleteOne({ id });
    await updateUser(userId, -1);
  } catch (err) {
    throw new Error(`cannot delete ${err}`);
  }
};
