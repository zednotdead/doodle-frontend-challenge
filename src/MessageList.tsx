import { useMessages } from "./contexts/MessageContext/hook";

export function MessageList() {
  const { messages, loadPrevious, loadLatest } = useMessages();
  return (
    <div>
      <button type="button" onClick={loadPrevious}>
        Load previous
      </button>
      <ul>
        {messages.map((msg) => (
          <li key={msg._id}>
            {msg.message} - {msg.author} - {msg.createdAt}
          </li>
        ))}
      </ul>
      <button type="button" onClick={loadLatest}>
        Load new
      </button>
    </div>
  );
}
