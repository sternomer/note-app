import { model, Schema, Document, ObjectId } from "mongoose";

interface INote extends Document {
  _id: ObjectId;
  content: String;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema<INote>(
  {
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    versionKey: false,
  }
);

const noteModel = model<INote>('note', noteSchema);

export default noteModel;
