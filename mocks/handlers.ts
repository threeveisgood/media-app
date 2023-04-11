import { rest } from "msw";

export interface Book {
  title: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
}

export const handlers = [
  rest.get("https://my.backend/book", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Book>({
        title: "book 1",
        description: "booooook",
      })
    );
  }),
  rest.get("/reviews", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Review[]>([
        {
          id: "1",
          author: "marol",
          text: "good vibes only",
        },
      ])
    );
  }),
];
