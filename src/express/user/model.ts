import { model, Schema, Document, ObjectId } from "mongoose";



interface IUser extends Document {
  _id: ObjectId;
  username: String;
  notes: number
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
    notes: {
    type: Number,
    default: 0,
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

const userModel = model<IUser>("user", userSchema);


export default userModel;
