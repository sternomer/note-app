import "./dotenv";
import * as env from "env-var";

export default {
  port: env.get("PORT").required().asInt(),
  mongo: {
    uri: env.get("MONGO_URI").required().asString(),
    collection: {
      note: env.get("MONGO_COLLECTION_NOTE").required().asString,
    },
  },
  jwt: {
    secret: env.get("JWT_SECRET").required().asString(),
  },
};
