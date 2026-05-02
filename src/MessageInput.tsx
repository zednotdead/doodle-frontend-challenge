import type { SubmitEventHandler } from "react";
import { useMessages } from "./contexts/MessageContext/hook";

export function MessageInput() {
  const { newMessage } = useMessages()
  const onSubmitHandler: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const messageFD = fd.get("newmessage")
    const message = messageFD?.toString()

    if (message) {
      newMessage(message)
    }
  }

  return (
    <div className="absolute bottom-0 w-full h-fit bg-blue-500 min-h-4">
      <form
        className="flex flex-row gap-2 mx-auto md:max-w-[640px] px-6 py-2"
        onSubmit={onSubmitHandler}
      >
        <input
          className="bg-white border-2 border-solid border-blue-700 w-full p-2 rounded-md"
          placeholder="Message"
          type="text"
          id="newmessage"
          name="newmessage"
        />
        <button className="py-2 px-4 bg-orange-400 rounded-md text-white">Send</button>
      </form>
    </div>
  );
}
