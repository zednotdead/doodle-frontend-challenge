import { MessageInput } from "../components/MessageInput";
import { MessageList } from "../components/MessageList";

export function Chat() {
  return (
    <>
      <div className="h-full pb-20 md:max-w-[640px] mx-auto">
        <MessageList />
      </div>
      <MessageInput />
    </>
  );
}
