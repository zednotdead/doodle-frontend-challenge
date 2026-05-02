import type { MessageSchema } from "../schema/message";
import { Message } from "./Message";

interface MessageListProps {
  messages: MessageSchema[];
  author: string;
  loadPrevious: () => void;
}

export function MessageList({
  messages,
  author,
  loadPrevious,
}: MessageListProps) {
  return (
    <div className="max-h-full overflow-auto">
      <button className="w-full" type="button" onClick={loadPrevious}>
        Load previous
      </button>
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
