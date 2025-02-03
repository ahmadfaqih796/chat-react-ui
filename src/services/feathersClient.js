// src/services/feathersClient.js
import feathers from "@feathersjs/feathers";
import rest from "@feathersjs/rest-client";
import auth from "@feathersjs/authentication-client";
import axios from "axios";
import Cookies from "js-cookie";

const app = feathers();
const restClient = rest("http://localhost:4001");
// const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
// const inFiveSeconds = new Date(new Date().getTime() + 10 * 1000); // 10 detik
app.configure(restClient.axios(axios));
app.configure(
  auth({
    storage: {
      getItem: (key) => Cookies.get(key),
      setItem: (key, value) =>
        Cookies.set(
          key,
          value
          // { expires: inFiveSeconds }
        ), // expired 7 hari
      removeItem: (key) => Cookies.remove(key),
    },
    storageKey: "feathers-jwt",
  })
);

export default app;
