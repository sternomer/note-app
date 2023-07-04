import mongoose, { ConnectOptions } from "mongoose";
import app from "./express/router";
import config from "./config/env.config";
import userModel from "./express/user/model";

const { port, mongo } = config;

const options: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const conn = mongoose.createConnection(mongo.uri, options);

const connect = async (uri: string) => {
  console.log("Connecting to mongo");
  await conn.openUri(uri, options);
  console.log("info", "Mongo connection established");
};

// get users from users.json
const users = require("../users.json");

const main = async () => {
  await connect(mongo.uri);
  await userModel.insertMany(users);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
  process.exit();
});
