import { validateRoute } from "../../../lib/auth";
import prisma from "../../../lib/prisma";

export default validateRoute(async (req, res, user) => {
  if (req.method !== "POST") {
    res.status(405).send({ ok: false });
  }

  const values = JSON.parse(req.body);
  console.log(values);

  // todo: error handling
  if (!values.name || values.name?.trim() === "") {
    res.status(422).send("Error, author name must not be blank");
    return;
  }

  const author = await prisma.author.create({
    data: {
      name: values.name,
    },
  });

  res.send({ authorId: author.id });
});
