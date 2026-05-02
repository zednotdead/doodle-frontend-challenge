import { LoadPrevious } from "../components/LoadPrevious";
import { MessageInput } from "../components/MessageInput";
import { MessageList } from "../components/MessageList";
import { useMessages } from "../contexts/MessageContext/hook";

export default function Chat() {
  const { messages, loadPrevious, author, newMessage, loading, reachedEnd } =
    useMessages();

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
          elementBeforeList={
            <div className="w-full grid place-items-center mb-4">
              <LoadPrevious
                onClick={loadPrevious}
                loading={loading}
                reachedEnd={reachedEnd}
              />
            </div>
          }
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center absolute bottom-0 w-full h-20 bg-blue-500 min-h-4">
        <MessageInput onNewMessage={onNewMessageHandler} loading={loading} />
      </div>
    </>
  );
}
