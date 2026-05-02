import { lazy } from "react";
import { useMessages } from "./contexts/MessageContext/hook";

const Chat = lazy(() => import("./pages/chat.tsx"));
const Login = lazy(() => import("./pages/login.tsx"));

export function App() {
  const { author } = useMessages();

  // Check if the author is set - if not, redirect to the login screen
  // Can be replaced with React Router, but this is setup is too simple
  return author ? <Chat /> : <Login />;
}
