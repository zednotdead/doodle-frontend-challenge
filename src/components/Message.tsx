import type { MessageSchema } from "../schema/message";

interface MessageProps {
  message: MessageSchema;
  belongsToSender: boolean
}

export function Message({ message, belongsToSender }: MessageProps) {
  return (
    <li>
      {message.message} - {message.author} - {message.createdAt}
    </li>
  );
}
