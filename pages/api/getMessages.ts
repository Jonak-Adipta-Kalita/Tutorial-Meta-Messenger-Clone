import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../redis";
import { Message } from "../../typings";

interface Data {
  messages: Message[];
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data | { message: string }>
) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const messageRes = await redis.hvals("messages");
  const messages: Message[] = messageRes
    .map((message) => JSON.parse(message))
    .sort((a, b) => a.created_at - b.created_at);

  res.status(200).json({ messages });
};
