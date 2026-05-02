import { createContext } from "react";
import type { MessageSchema } from "../../schema/message";

interface IMessageContext {
  author?: string;
  setAuthor: (author: string) => void;
  messages: MessageSchema[];
  loadPrevious: () => void;
  loadLatest: () => void;
  newMessage: (msg: string) => void;
}

export const MessageContext = createContext<IMessageContext>({
  messages: [],
  setAuthor: () => {},
  loadPrevious: () => {},
  loadLatest: () => {},
  newMessage: () => {},
});
