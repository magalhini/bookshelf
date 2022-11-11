import { validateRoute } from "../../../lib/auth";
import prisma from "../../../lib/prisma";

export default validateRoute(async (req, res, user) => {
  const { title } = req.body;

  const newShelf = await prisma.shelf.create({
    data: {
      name: title,
      user: {
        connect: {
          email: user?.email,
        },
      },
    },
  });

  res.json({
    newShelf,
  });
});
