import { API_URL } from "../consts";

export async function sendMessage(
  message: string,
  author: string,
): Promise<void> {
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ message, author }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
    },
  });
}
