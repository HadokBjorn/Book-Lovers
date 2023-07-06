import { CreateBook } from "protocols/book";
import prisma from "../database";
import { CreateReview } from "protocols/review";

export async function getBooks() {
  return prisma.book.findMany();
}

export async function getBook(id: number) {
  return prisma.book.findUnique({
    where:{id}
  });
}

export async function createBook(book: CreateBook) {
  book.purchaseDate = new Date(book.purchaseDate)
  return prisma.book.create({data:book});
}

export async function reviewBook(bookReview: CreateReview) {
  bookReview.read = true;
  return prisma.book.update({
    where: {
      id: bookReview.id
    },
    data: {
      grade: bookReview.grade,
      review: bookReview.review,
      read: bookReview.read
    },
  })
}