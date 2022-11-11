import React from "react";
import { Flex, Text, Box, Heading } from "@chakra-ui/react";
import fetcher from "../../lib/fetcher";
import { validateToken } from "../../lib/auth";
import AddShelfForm from "../../components/addShelf";

type Shelf = {
  title: string;
};

const AddShelf = () => {
  const onShelfSave = async (shelfData: Shelf) => {
    try {
      const data = await fetcher("/bookshelf/create", {
        title: shelfData.title,
      });

      return data;
    } catch (err) {
      console.log("Error:", err);
    }
  };
  return (
    <Box>
      <Text as="h2">Add new Shelf</Text>
      <AddShelfForm onCancel={() => {}} onSave={onShelfSave} />
    </Box>
  );
};

export default AddShelf;
