import type { SubmitEventHandler } from "react";

interface MessageInputProps {
  onNewMessage: (message: string) => void;
  loading: boolean;
}

export function MessageInput({ onNewMessage, loading }: MessageInputProps) {
  const onSubmitHandler: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const messageFD = fd.get("newmessage");
    const message = messageFD?.toString();

    if (message) {
      onNewMessage(message);
      form.reset();
    }
  };

  return (
    <form
      className="flex flex-row gap-2 mx-auto w-full md:max-w-[640px] px-6 py-2"
      onSubmit={onSubmitHandler}
    >
      <input
        className="bg-white border-2 border-solid border-blue-700 w-full p-2 rounded-md disabled:cursor-not-allowed"
        placeholder="Message"
        type="text"
        id="newmessage"
        name="newmessage"
        disabled={loading}
      />
      <button
        className="py-2 px-4 bg-orange-400 rounded-md text-white cursor-pointer disabled:cursor-not-allowed"
        disabled={loading}
      >
        Send
      </button>
    </form>
  );
}
