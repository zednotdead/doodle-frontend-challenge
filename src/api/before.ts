import z from "zod";
import { messageSchema, type MessageSchema } from "../schema/message";
import { API_URL, MESSAGE_AMOUNT } from "../consts";

export async function fetchMessagesBeforeTimestamp(
  timestamp: Date,
  limit: number = MESSAGE_AMOUNT,
): Promise<MessageSchema[]> {
  const url = new URL(API_URL);
  url.searchParams.set("before", timestamp.toISOString());
  url.searchParams.set("limit", limit.toString());

  const data = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
    },
  }).then((r) => r.json());

  const parsedData = await z.parseAsync(z.array(messageSchema), data);

  return parsedData;
}
