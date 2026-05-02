import { MessageInput } from "../components/MessageInput";
import { MessageList } from "../components/MessageList";

export function Chat() {
  return (
    <>
      <div className="h-full pb-20 md:max-w-[640px] mx-auto">
        <MessageList />
      </div>
      <div className="grid grid-cols-1 items-center justify-center absolute bottom-0 w-full h-20 bg-blue-500 min-h-4">
        <MessageInput />
      </div>
    </>
  );
}
