import { validateRoute } from "../../../lib/auth";
import prisma from "../../../lib/prisma";

export default validateRoute(async (req, res, user) => {
  if (req.method !== "POST") {
    res.status(405).send({ ok: false });
  }

  const values = JSON.parse(req.body);
  console.log(values);

  // todo: error handling
  if (!values.title || !values.author) {
    res.status(422).send("Error");
    return;
  }

  try {
    const book = await prisma.book.create({
      data: {
        title: values.title,
        genre: values.genre,
        year: parseInt(values.year, 10),
        cover: "",
        Shelf: {
          connect: {
            id: parseInt(values.shelf),
          },
        },
        author: {
          connect: {
            id: parseInt(values.author),
          },
        },
      },
    });
    res.send({ bookId: book.id });
  } catch (err) {
    res.json({ error: "Something went wrong" });
  }
});
