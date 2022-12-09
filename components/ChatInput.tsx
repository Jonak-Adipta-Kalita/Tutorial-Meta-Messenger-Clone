"use client";

import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../typings";

type Props = {};

const ChatInput = (props: Props) => {
  const [input, setInput] = useState("");

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input;

    setInput("");

    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "JAK Clone",
      profilePic: "https://avatars.githubusercontent.com/u/70377522?v=4",
      email: "jonakadiptakalita@gmail.com",
    };

    const uploadMessageToUpstash = async () => {
      const res = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
    };

    uploadMessageToUpstash();
  };

  return (
    <form
      onSubmit={addMessage}
      className="flex px-10 py-5 space-x-2 border border-gray-100 fixed bottom-0 z-50 w-full"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter message here..."
        className="flex-1 rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-blue-500 hover:bg-blue-700 disabled:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
