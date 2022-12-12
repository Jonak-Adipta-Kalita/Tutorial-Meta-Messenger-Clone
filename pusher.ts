import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1523234",
  key: "f2d6f6a9118795b7a4a2",
  secret: "97d27aff03a6ea167064",
  cluster: "ap2",
});

export const clientPusher = new ClientPusher("newMessage!!", {
  cluster: "ap2",
  forceTLS: true,
});
