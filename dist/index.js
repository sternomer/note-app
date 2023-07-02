"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const service_1 = __importDefault(require("./express/service"));
const env_config_1 = __importDefault(require("./config/env.config"));
const { port, mongo } = env_config_1.default;
const initializeMongo = async () => {
    console.log("Connecting to mongo");
    console.log(mongo);
    mongoose_1.default.set("strictQuery", true);
    await mongoose_1.default.connect(mongo.uri);
    console.log("info", "Mongo connection established");
};
const main = async () => {
    await initializeMongo();
    service_1.default.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
};
main().catch((err) => {
    console.log(err);
    process.exit();
});
//# sourceMappingURL=index.js.map