"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.getNote = exports.createNote = void 0;
const model_1 = __importDefault(require("./model"));
const createNote = async (userId, note) => {
    try {
        return model_1.default.create({
            content: note,
            user: userId,
        });
    }
    catch (err) {
        console.log(err);
        return;
    }
};
exports.createNote = createNote;
const getNote = async (id) => {
    const note = await model_1.default.findById(id).exec();
    if (note)
        return note.content;
    console.log("cannot find note");
    return;
};
exports.getNote = getNote;
const updateNote = async (id, body) => {
    const updatedNote = await model_1.default.findByIdAndUpdate({ _id: id }, { content: body });
    if (updatedNote)
        return exports.updateNote;
    console.log("cannot find note");
    return;
};
exports.updateNote = updateNote;
const deleteNote = async (id) => {
    return await model_1.default
        .deleteOne({ id })
        .catch((err) => console.log("cannot delete note", err));
};
exports.deleteNote = deleteNote;
//# sourceMappingURL=manager.js.map