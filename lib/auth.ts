import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { LIBRARY_TOKEN: token } = req.cookies; // check for token

    if (token) {
      let user;

      // Get the ID from the token with our encryption secret.
      // Then find a user in the DB with that ID.
      // If its not there, not a real user.
      try {
        const { id } = jwt.verify(token, "hello");

        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("Not a real user");
        }
      } catch (err) {
        res.status(401);
        res.json({ error: "Not Authorized" });
      }

      // Pass the user to the next handler
      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not Authorized" });
  };
};

export const validateToken = (token) => {
  // token may not always be passed, so we handle that in getServerSideProps
  // with a catch, redirecting back to signin

  const user = jwt.verify(token, "hello");
  return user;
};
