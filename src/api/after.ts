import z from "zod";
import { messageSchema, type MessageSchema } from "../schema/message";
import { API_URL } from "../consts";

export async function fetchMessagesAfterTimestamp(timestamp: Date): Promise<MessageSchema[]> {
  const url = new URL(API_URL)
  url.searchParams.set("after", timestamp.toISOString())

  const data = await fetch(url, { headers: {
    Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
  } }).then(r => r.json())

  const parsedData = await z.parseAsync(z.array(messageSchema), data)

  return parsedData
}
