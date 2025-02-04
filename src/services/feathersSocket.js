/* eslint-disable no-undef */
import feathers from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";
import rest from "@feathersjs/rest-client";
import auth from "@feathersjs/authentication-client";
import io from "socket.io-client";
import axios from "axios";
import Cookies from "js-cookie";

const URL = "http://localhost:4001";
const PATH = "/hadir-api/socket.io";

// **1. Konfigurasi WebSocket Client**
const socket = io(`${URL}`, {
  transports: ["websocket"],
  forceNew: true,
  path: `${PATH}`,
});
const socketApp = feathers();
socketApp.configure(socketio(socket));
socketApp.configure(
  auth({
    storage: {
      getItem: (key) => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value),
      removeItem: (key) => Cookies.remove(key),
    },
    storageKey: "feathers-jwt",
  })
);

// **2. Konfigurasi REST Client**
const restClient = rest(URL);
const restApp = feathers();
restApp.configure(restClient.axios(axios));
restApp.configure(
  auth({
    storage: {
      getItem: (key) => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value),
      removeItem: (key) => Cookies.remove(key),
    },
    storageKey: "feathers-jwt",
  })
);

export { socketApp, restApp };
