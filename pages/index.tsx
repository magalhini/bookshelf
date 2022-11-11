import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { useMe } from "../lib/hooks";

const Home: NextPage = () => {
  const { user, error, loading } = useMe();
  console.log(user);

  return (
    <Box>
      <Head>
        <title>Bookshelfy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Flex flexDirection="column">
          <Heading>Bookshelfy</Heading>
          <Box my={10}>
            {loading && <Text>...</Text>}
            {user && <Text fontSize="xxxl">Welcome {user.firstName}</Text>}
            <NextLink href="/bookshelf/all">View all Bookshelves</NextLink>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
