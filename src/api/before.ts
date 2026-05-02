import z from "zod";
import { messageSchema } from "../schema/message";
import { API_URL } from "../consts";

export async function fetchMessagesBeforeTimestamp(
  timestamp: Date,
  limit: number = 2,
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
