import type { NextApiRequest, NextApiResponse } from "next";
import { Message } from "../../typings";
import redis from "../../redis";
import { serverPusher } from "../../pusher";

type Data = {
  message: Message | string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message }: { message: Message } = req.body;

  const newMessage: Message = {
    ...message,
    created_at: Date.now(),
  };

  await redis.hset("messages", newMessage.id, JSON.stringify(newMessage));
  serverPusher.trigger("messages", "new-message", newMessage);

  res.status(200).json({ message: newMessage });
};
