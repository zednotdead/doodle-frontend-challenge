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
// INFO: Uncomment if you want to load the entire message backlog
// import { fetchAllMessages } from "../../api/all";

export const MessagesContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [messages, setMessages] = useState<MessageSchema[]>([]);
  const [author, setAuthor] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  // Store the timestamp at the oldest message
  const oldestTimestamp = useMemo(() => {
    const timestamp = messages.at(0)?.createdAt;
    if (!timestamp) return undefined;
    const date = new Date(timestamp);
    return date;
  }, [messages]);

  // Store the timestamp at the newest message
  const newestTimestamp = useMemo(() => {
    const timestamp = messages.at(-1)?.createdAt;
    if (!timestamp) return undefined;
    const date = new Date(timestamp);
    return date;
  }, [messages]);

  useEffect(() => {
    // Load the messages on the first mount
    fetchMessagesBeforeTimestamp(new Date()).then(setMessages);
    // INFO: Comment previous line and uncomment next line if you want to load the entire message backlog
    // fetchAllMessages().then(setMessages)
  }, []);

  const loadPrevious = useCallback(async () => {
    if (!oldestTimestamp) return;

    setLoading(true);

    try {
      const oldMessages = await fetchMessagesBeforeTimestamp(oldestTimestamp);

      if (oldMessages.length === 0) {
        setReachedEnd(true);
      } else {
        setMessages(produce((draft) => oldMessages.concat(draft)));
      }
    } finally {
      setLoading(false);
    }
  }, [oldestTimestamp]);

  const loadLatest = useCallback(async () => {
    if (!newestTimestamp) return;

    setLoading(true);

    try {
      const newMessages = await fetchMessagesAfterTimestamp(newestTimestamp);

      setMessages(produce((draft) => draft.concat(newMessages)));
    } finally {
      setLoading(false);
    }
  }, [newestTimestamp]);

  const newMessage = useCallback(
    // Send a new message, then fetch messages after the latest messages' timestamp
    async (message: string) => {
      if (!author) return;

      setLoading(true);

      try {
        await sendMessage(message, author);
        await loadLatest();
      } finally {
        setLoading(false);
      }
    },
    [loadLatest, author],
  );

  return (
    <MessageContext.Provider
      value={{
        messages,
        newMessage,
        loadLatest,
        loadPrevious,
        author,
        setAuthor,
        loading,
	reachedEnd,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
