import { useMessages } from "./contexts/MessageContext/hook";
import { Chat } from "./pages/chat";
import { Login } from "./pages/login";

export function App() {
  const { author } = useMessages();

  // Check if the author is set - if not, redirect to the login screen
  // Can be replaced with React Router, but this is setup is too simple
  return author ? <Chat /> : <Login />;
}
