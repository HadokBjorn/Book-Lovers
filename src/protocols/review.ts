import { Book } from "@prisma/client"

export type CreateReview = Pick<Book, "id" | "grade" | "review" | "read">