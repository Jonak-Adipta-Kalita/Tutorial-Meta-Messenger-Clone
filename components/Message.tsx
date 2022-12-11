import Image from "next/image";
import React from "react";
import { Message } from "../typings";

type Props = {
  message: Message;
};

const Message = ({ message }: Props) => {
  const isUser = true;

  return (
    <div className={`flex w-fit ${isUser && "ml-auto"}`}>
      <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
        <Image
          src={message.profilePic}
          height={10}
          width={50}
          className="rounded-full mx-2"
          alt="profile-pic"
        />
      </div>
      <div className="">
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px] ${
            isUser ? "text-blue text-right" : "text-red-400 text-left"
          }`}
        >
          {message.username}
        </p>
        <div className="flex items-end">
          <div
            className={`px-3 py-2 rounded-lg w-fit text-white ${
              isUser ? "bg-blue-400 ml-auto order-2" : "bg-red-400"
            }`}
          >
            <p className="">{message.message}</p>
          </div>
          <p
            className={`text-[0.65rem] italic px-2 text-gray-300 ${
              isUser && "text-right"
            }`}
          >
            {new Date(message.created_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
