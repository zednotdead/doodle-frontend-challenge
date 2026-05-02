import z from "zod";
import { messageSchema, type MessageSchema } from "../schema/message";
import { API_URL } from "../consts";

export async function fetchAllMessages(): Promise<MessageSchema[]> {
  const data = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
    },
  }).then((r) => r.json());

  // To be safe, parse the data
  const parsedData = await z.parseAsync(z.array(messageSchema), data);

  return parsedData;
}
