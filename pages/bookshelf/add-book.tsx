import React from "react";
import { Flex, Text, Box, Heading } from "@chakra-ui/react";
import fetcher from "../../lib/fetcher";
import { validateToken } from "../../lib/auth";
import AddBookForm from "../../components/addBook";

const AddBook = () => {
  const onBookSave = async (bookData) => {
    const data = await fetcher("/book/create", {
      title: bookData.title,
      author: bookData.author,
    });

    console.log(data);
  };
  return (
    <Box>
      <Text as="h2">Add new</Text>
      <AddBookForm onSave={onBookSave} />
    </Box>
  );
};

export default AddBook;
