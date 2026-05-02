import z from "zod";

export const messageSchema = z.object({
  _id: z.guid(),
  message: z.string(),
  author: z.string(),
  createdAt: z.iso.datetime()
})

export type MessageSchema = z.infer<typeof messageSchema>
