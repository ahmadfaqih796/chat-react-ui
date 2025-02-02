// src/services/feathersClient.js
import feathers from "@feathersjs/feathers";
import rest from "@feathersjs/rest-client";
import auth from "@feathersjs/authentication-client";
import axios from "axios";

const app = feathers();
const restClient = rest("http://localhost:4001");
app.configure(restClient.axios(axios));
app.configure(
  auth({
    storage: window.localStorage,
    storageKey: "feathers-jwt",
  })
);

export default app;
