import React from "react";
import { Flex, Text, List, ListItem, Box, Heading } from "@chakra-ui/react";
import prisma from "../../lib/prisma";
import { validateToken } from "../../lib/auth";
import { formatDate } from "../../lib/helpers";

const AllBooks = ({ shelves }) => {
  console.log(shelves);
  return (
    <Box>
      <Box mb="6">
        <Heading as="h1">Your shelves</Heading>
      </Box>
      <Box>
        {shelves.map((shelf) => {
          return (
            <Box mb="10" key={shelf.id}>
              <Text as="h2" fontSize="24" fontWeight="bold" pb="6">
                {shelf.name}
              </Text>
              <List maxWidth="40em" spacing={2}>
                {shelf.books.map((book) => (
                  <ListItem key={book.id}>
                    <Text fontSize="2xl">{book.title}</Text>
                    <Flex justifyContent="space-between">
                      <Text fontStyle="italic">by {book.author.name}</Text>
                      <Text fontStyle="italic">
                        on {formatDate(book.createdAt)}
                      </Text>
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

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

  const shelves = await prisma.shelf.findMany({
    where: {
      userId: user.id,
    },
    include: {
      books: {
        select: {
          title: true,
          author: true,
          createdAt: true,
          id: true,
        },
      },
    },
  });

  return {
    props: {
      shelves,
    },
  };
};

export default AllBooks;
