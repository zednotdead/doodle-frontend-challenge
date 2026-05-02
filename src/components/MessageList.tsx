import { useMessages } from "../contexts/MessageContext/hook";
import { Message } from "./Message";

export function MessageList() {
  const { messages, author, loadPrevious } = useMessages();
  return (
    <div>
      <button type="button" onClick={loadPrevious}>
        Load previous
      </button>
      <ul>
        {messages.map((msg) => (
          <Message message={msg} key={msg._id} belongsToSender={msg.author === author} />
        ))}
      </ul>
    </div>
  );
}
