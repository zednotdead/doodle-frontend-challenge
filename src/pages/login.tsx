import type { SubmitEventHandler } from "react";
import { useMessages } from "../contexts/MessageContext/hook";

export function Login() {
  const { setAuthor } = useMessages()

  const onSubmitHandler: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const authorFD = fd.get("author");
    const author = authorFD?.toString();

    if (author) {
      setAuthor(author)
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="author">Author</label>{" "}
      <input name="author" id="author" placeholder="John Doe" />
      <button>Submit</button>
    </form>
  );
}
