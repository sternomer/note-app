import envConfig from "../src/config/env.config";
import { connect } from "./index";
import userModel from "./../src/express/user/model";

(async () => {
  await connect(envConfig.mongo.uri);
  const users = require("../users.json");

  await userModel.deleteMany({});
  await userModel.insertMany(users);
  console.log("Users inserted");

  process.exit(0);
})();
