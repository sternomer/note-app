import noteModel from "./model";

export const createNote = async (userId: String, note: string) => {
  try {
    return noteModel.create({
      content: note,
      user: userId,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getNote = async (id: string) => {
  const note = await noteModel.findById({ _id: id }).exec();
  if (note) return note.content;
  console.log("cannot find note");
  return;
};

export const updateNote = async (id: string, body: string) => {
  const updatedNote = await noteModel
    .findByIdAndUpdate({ _id: id }, { content: body })
    .exec();
  if (updatedNote) return updateNote;
  console.log("cannot find note");
  return;
};

export const deleteNote = async (id: string) => {
  return await noteModel
    .deleteOne({ id })
    .catch((err) => console.log("cannot delete note"));
};
