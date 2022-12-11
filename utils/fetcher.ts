import type { Message } from "../typings";

export default async () => {
  const res = await fetch("/api/getMessages");
  const data = await res.json();
  const messages = data.messages as Message[];

  return messages;
};
