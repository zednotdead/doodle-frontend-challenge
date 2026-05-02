import { MessageInput } from "./components/MessageInput";
import { MessageList } from "./components/MessageList";
import { useMessages } from "./contexts/MessageContext/hook";
import { Login } from "./pages/Login";

export function App() {
  const { author } = useMessages()
  
  return author ? (
    <div>
      <MessageList />
      <MessageInput />
    </div>
  ) : (
    <div>
      <Login />
    </div>
  );
}
