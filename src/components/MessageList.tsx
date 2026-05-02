import type { ReactNode } from "react";
import type { MessageSchema } from "../schema/message";
import { Message } from "./Message";

interface MessageListProps {
  messages: MessageSchema[];
  author: string;
  elementBeforeList: ReactNode
}

export function MessageList({
  messages,
  author,
  elementBeforeList
}: MessageListProps) {
  return (
    <div className="max-h-full w-full overflow-auto">
      {elementBeforeList}
      <ul className="flex flex-col gap-4 mb-4">
        {messages.map((msg) => (
          <Message
            message={msg}
            key={msg._id}
            belongsToSender={msg.author === author}
          />
        ))}
      </ul>
    </div>
  );
}
