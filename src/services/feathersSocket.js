/* eslint-disable no-undef */
import feathers from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";

import io from "socket.io-client";

const URL = "http://localhost:4001";
const PATH = "/hadir-api/socket.io";

const socket = io(`${URL}`, {
  transports: ["websocket"],
  forceNew: true,
  path: `${PATH}`,
});

const client = feathers();
const socketClient = socketio(socket);
client.configure(socketClient);

export default client;
