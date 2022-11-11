import { validateRoute } from "../../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoute(async (req, res, user) => {
  const { title, author } = req.body;

  const newBook = await prisma.book.create({
    data: {
      title,
      author,
    },
  });
  res.json({
    title,
    author,
  });
});
