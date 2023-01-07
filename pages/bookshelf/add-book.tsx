import React from "react";
import { Flex, Text, Box, Heading } from "@chakra-ui/react";
import fetcher from "../../lib/fetcher";
import { validateToken } from "../../lib/auth";
import { useRouter } from "next/router";
import prisma from "../../lib/prisma";
import AddBookForm from "../../components/addBook";

const AddBook = ({ shelves, authors }) => {
  const router = useRouter();

  const onBookSave = async (bookData) => {
    fetch("/api/book/create", {
      method: "POST",
      body: JSON.stringify(bookData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.bookId) {
          router.push("/bookshelf/all");
        }
      });
  };

  return (
    <Box>
      <Heading as="h1" mb="5">
        Add a new book
      </Heading>
      <AddBookForm
        onCancel={() => {}}
        onSave={onBookSave}
        authors={authors}
        shelves={shelves}
      />
    </Box>
  );
};

export default AddBook;

export const getServerSideProps = async ({ query, req }) => {
  let user;

  try {
    user = validateToken(req.cookies.LIBRARY_TOKEN);
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }

  const authors = await prisma.author.findMany();
  const shelves = await prisma.shelf.findMany({
    where: {
      userId: user.id,
    },
  });

  return {
    props: {
      shelves,
      authors,
    },
  };
};
