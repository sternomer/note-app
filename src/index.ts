import mongoose from "mongoose";
import app from "./express/service";
import config from "./config/env.config";

const { port, mongo } = config;

const initializeMongo = async () => {
  console.log("Connecting to mongo");

  mongoose.set("strictQuery", true);
  await mongoose.connect(mongo.uri);

  console.log("info", "Mongo connection established");
};

const main = async () => {
  await initializeMongo();

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
  process.exit();
});
