import noteModel from "./model";

export const createNote = async (note: any) => {
  try {
    return noteModel.create({
      content: note,
    });
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

export const deleteNote = async (id: string) => {
  const deleted = await noteModel.deleteOne({ id });
  if (!deleted) throw new Error("cannot delete");
};
