"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
    content: {
        type: String,
        required: true,
    },
    timeStamps: {
        createdAt: true,
        updatedAt: true,
    },
    versionKey: false,
});
const noteModel = (0, mongoose_1.model)("note", noteSchema);
exports.default = noteModel;
//# sourceMappingURL=model.js.map