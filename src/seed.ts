import mongoose from "mongoose";
import envConfig from "../src/config/env.config";
import userModel from "./../src/express/user/model";

(async () => {
  const users = require("../users.json");
  mongoose.set("strictQuery", true);
  await mongoose.connect(envConfig.mongo.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await userModel.deleteMany({});
  await userModel.insertMany(users);
  console.log("Users inserted");

  process.exit(0);
})();
