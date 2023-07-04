import app from "./express/router";
import mongoose from "mongoose";
import config from "./config/env.config";

const { port, mongo } = config;



const initializeMongo = async () => {
  console.log("Connecting to Mongo...");
  mongoose.set('strictQuery', true);
  await mongoose.connect(mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Mongo connected");
  
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
