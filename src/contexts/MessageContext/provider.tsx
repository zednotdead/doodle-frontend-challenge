import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
import { produce } from "immer";
import type { MessageSchema } from "../../schema/message";
import { fetchMessagesBeforeTimestamp } from "../../api/before";
import { fetchMessagesAfterTimestamp } from "../../api/after";
import { sendMessage } from "../../api/submit";
import { MessageContext } from "./context";

export const MessagesContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [messages, setMessages] = useState<MessageSchema[]>([]);

  const oldestTimestamp = useMemo(() => {
    const timestamp = messages.at(0)?.createdAt;
    if (!timestamp) return undefined;
    const date = new Date(timestamp);
    return date;
  }, [messages]);

  const newestTimestamp = useMemo(() => {
    const timestamp = messages.at(-1)?.createdAt;
    if (!timestamp) return undefined;
    const date = new Date(timestamp);
    return date;
  }, [messages]);

  useEffect(() => {
    fetchMessagesBeforeTimestamp(new Date()).then((res) => setMessages(res));
  }, []);

  const loadPrevious = useCallback(async () => {
    if (!oldestTimestamp) return;

    const oldMessages = await fetchMessagesBeforeTimestamp(oldestTimestamp);

    setMessages(produce((draft) => oldMessages.concat(draft)));
  }, [oldestTimestamp]);

  const loadLatest = useCallback(() => {
    if (!newestTimestamp) return;

    fetchMessagesAfterTimestamp(newestTimestamp).then((newMessages) => {
      setMessages(produce((draft) => draft.concat(newMessages)));
    });
  }, [newestTimestamp]);

  const newMessage = useCallback(
    async (message: string) => {
      await sendMessage(message, "John Doe");
      loadLatest();
    },
    [loadLatest],
  );

  return (
    <MessageContext.Provider
      value={{ messages, newMessage, loadLatest, loadPrevious }}
    >
      {children}
    </MessageContext.Provider>
  );
};
