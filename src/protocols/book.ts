import { Book } from "@prisma/client";

export type CreateBook = Omit<Book, "id">;