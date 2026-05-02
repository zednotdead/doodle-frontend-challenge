import { format } from "date-fns";
import { DATE_FORMAT } from "../consts";
import type { MessageSchema } from "../schema/message";
import { cva } from "../utils/cva";

interface MessageProps {
  message: MessageSchema;
  belongsToSender: boolean;
}

const messageClass = cva({
  base: "flex flex-col p-4 mx-6 border-2 border-solid border-gray-300 rounded-md w-fit max-w-[240px] md:max-w-[420px]",
  variants: {
    source: {
      others: "bg-white",
      sender: "bg-amber-100 ml-auto",
    },
  },

  defaultVariants: {
    source: "others",
  },
});

const messageDateClass = cva({
  base: "text-gray-500",

  variants: {
    source: {
      others: "text-left",
      sender: "text-right",
    },
  },

  defaultVariants: {
    source: "others",
  },
});

export function Message({ message, belongsToSender }: MessageProps) {
  const source = belongsToSender ? "sender" : "others";

  return (
    <li className={messageClass({ source })}>
      {!belongsToSender && <p className="text-gray-500">{message.author}</p>}

      <p>{message.message}</p>

      <p className={messageDateClass({ source })}>
        {format(message.createdAt, DATE_FORMAT)}
      </p>
    </li>
  );
}
