import { model, Schema } from "mongoose";
import envConfig from "../../config/env.config";

const noteSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  timeStamps: {
    createdAt: true,
    updatedAt: true,
  },
  versionKey: false,
});

const noteModel = model('note', noteSchema);

export default noteModel;
