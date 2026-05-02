import { useMessages } from "./contexts/MessageContext/hook";
import { Chat } from "./pages/chat";
import { Login } from "./pages/login";

export function App() {
  const { author } = useMessages();

  return author ? <Chat /> : <Login />;
}
