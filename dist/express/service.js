"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./notes/router"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use((0, cors_1.default)());
exports.app.use('/api/notes', router_1.default);
exports.app.use("*", (_req, res) => {
    res.status(404).send("Invalid Route");
});
exports.app.use((err, _req, res, _next) => {
    res.status(500).send(err.message);
});
exports.default = exports.app;
//# sourceMappingURL=service.js.map