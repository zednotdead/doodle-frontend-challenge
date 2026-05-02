import type { SubmitEventHandler } from "react";
import { useMessages } from "../contexts/MessageContext/hook";

export default function Login() {
  const { setAuthor } = useMessages();

  const onSubmitHandler: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const authorFD = fd.get("author");
    const author = authorFD?.toString();

    if (author) {
      setAuthor(author);
    }
  };

  return (
    <div className="w-full h-full grid place-content-center">
      <form
        className="flex flex-col w-full md:max-w-[640px] bg-amber-100 border border-solid border-gray-500 rounded-md p-4 gap-2"
        onSubmit={onSubmitHandler}
      >
        <label className="font-bold" htmlFor="author">
          Author
        </label>{" "}
        <input
          className="bg-white border border-solid border-gray-400 p-2 rounded-md"
          name="author"
          id="author"
          placeholder="John Doe"
        />
        <button className="w-fit p-2 bg-red-400 text-white font-bold rounded-md ml-auto">Log in</button>
      </form>
    </div>
  );
}
