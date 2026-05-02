import { createContext } from "react";
import type { MessageSchema } from "../../schema/message";

interface IMessageContext {
  messages: MessageSchema[];
  loadPrevious: () => void;
  loadLatest: () => void;
  newMessage: (msg: string) => void;
}

export const MessageContext = createContext<IMessageContext>({
  messages: [],
  loadPrevious: () => {},
  loadLatest: () => {},
  newMessage: () => {},
});
