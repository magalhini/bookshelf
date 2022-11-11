import React, { FormEventHandler } from "react";
import {
  Flex,
  Text,
  Button,
  Input,
  FormLabel,
  List,
  Stack,
  Box,
  FormControl,
} from "@chakra-ui/react";

type AddBookProps = {
  onSave(): void;
  onCancel(): void;
};

const AddBookForm: React.FC<AddBookProps> = ({ onSave, onCancel }) => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!title || !author) {
      return false;
    }

    onSave({
      title,
      author,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <FormControl mb="10">
          <FormLabel>Book title</FormLabel>
          <Input
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            type="text"
          />
        </FormControl>
        <FormControl mb="10">
          <FormLabel>Book author</FormLabel>
          <Input
            value={author}
            onChange={(evt) => setAuthor(evt.target.value)}
            type="text"
          />
        </FormControl>
        <FormControl mb="10">
          <FormLabel>Genre</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl mb="10">
          <FormLabel>Year</FormLabel>
          <Input type="date" />
        </FormControl>
        <Box>
          <Stack direction="row" spacing={4} align="center">
            <Button type="submit" colorScheme="teal" variant="solid">
              Save book
            </Button>
            <Button colorScheme="teal" variant="outline">
              Cancel
            </Button>
          </Stack>
        </Box>
      </Box>
    </form>
  );
};

export default AddBookForm;
