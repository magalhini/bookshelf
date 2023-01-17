import React, { useState } from "react";
import { Flex, Text, Box, Heading } from "@chakra-ui/react";
import { validateToken } from "../../lib/auth";
import { useRouter } from "next/router";
import prisma from "../../lib/prisma";
import AddBookForm from "../../components/addBook";

const AddBook = ({ shelves, authors }) => {
  const router = useRouter();
  const [error, setError] = useState("");

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const onAuthorSave = async (authorData) => {
    return fetch("/api/author/create", {
      method: "POST",
      body: JSON.stringify(authorData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res) {
          refreshData();
        }

        return res.authorId;
      })
      .catch((err) => {
        setError(err);
      });
  };

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
      })
      .catch((err) => {
        console.log("err", err);
        setError(err);
      });
  };

  return (
    <Box>
      <Heading as="h1" mb="5">
        Add a new book
      </Heading>
      <AddBookForm
        error={error}
        onCancel={() => {}}
        onSave={onBookSave}
        onAuthorSave={onAuthorSave}
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

  const authors = await prisma.author.findMany({
    orderBy: {
      name: "asc",
    },
  });

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
