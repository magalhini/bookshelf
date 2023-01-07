import React from "react";
import { Flex, Text, List, ListItem, Box, Heading } from "@chakra-ui/react";
import prisma from "../../lib/prisma";
import { validateToken } from "../../lib/auth";
import { formatDate } from "../../lib/helpers";
import Link from "next/link";

const AllBooks = ({ shelves }) => {
  return (
    <Box>
      <Box mb="6">
        <Heading as="h1">Your shelves</Heading>
      </Box>
      <Box>
        {shelves.map((shelf) => {
          return (
            <Box mb="10" key={shelf.id}>
              <Text as="h3" fontSize="24" fontWeight="bold" pb="6">
                {shelf.name}
              </Text>

              {shelf.books.map((bookItem) => (
                <List
                  key={`book-${bookItem.id}`}
                  maxWidth="40em"
                  mb={3}
                  spacing={2}
                >
                  <ListItem>
                    <Text fontSize="2xl">{bookItem.title}</Text>
                    <Flex justifyContent="space-between">
                      <Text fontStyle="italic">by {bookItem.author.name}</Text>
                      <Text fontStyle="italic">
                        on {formatDate(bookItem.createdAt)}
                      </Text>
                    </Flex>
                  </ListItem>
                </List>
              ))}
            </Box>
          );
        })}
      </Box>
      <Link href="/bookshelf/add-book">Add new book</Link>
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

  // const shelves = await prisma.shelf.findMany({
  //   where: {
  //     userId: user.id,
  //   },
  //   include: {
  //     books: {
  //       select: {
  //         title: true,
  //         author: true,
  //         createdAt: true,
  //         id: true,
  //       },
  //     },
  //   },
  // });

  return {
    props: {
      shelves,
    },
  };
};

export default AllBooks;
