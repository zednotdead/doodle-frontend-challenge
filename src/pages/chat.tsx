import { MessageInput } from "../components/MessageInput";
import { MessageList } from "../components/MessageList";
import { useMessages } from "../contexts/MessageContext/hook";

export function Chat() {
  const { messages, loadPrevious, author, newMessage } = useMessages();

  const onNewMessageHandler = (msg: string) => {
    newMessage(msg);
  };

  if (!author) return null;

  return (
    <>
      <div className="h-full pb-20 md:max-w-[640px] mx-auto">
        <MessageList
          messages={messages}
          author={author}
          loadPrevious={loadPrevious}
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center absolute bottom-0 w-full h-20 bg-blue-500 min-h-4">
        <MessageInput onNewMessage={onNewMessageHandler} />
      </div>
    </>
  );
}
