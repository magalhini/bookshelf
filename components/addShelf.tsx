import React from "react";
import {
  Button,
  Input,
  FormLabel,
  Stack,
  Box,
  FormControl,
} from "@chakra-ui/react";

type Shelf = {
  title: string;
};

type AddShelfProps = {
  // eslint-disable-next-line no-unused-vars
  onSave: (shelfData: Shelf) => Promise<void>;
  onCancel: () => void;
};

const AddShelfForm = ({ onSave, onCancel }: AddShelfProps) => {
  const [title, setTitle] = React.useState("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!title) {
      return false;
    }

    onSave({ title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <FormControl mb="10">
          <FormLabel>Title for this shelf</FormLabel>
          <Input
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            type="text"
          />
        </FormControl>
        <Box>
          <Stack direction="row" spacing={4} align="center">
            <Button type="submit" colorScheme="teal" variant="solid">
              Save shelf
            </Button>
            <Button
              onClick={() => onCancel()}
              colorScheme="teal"
              variant="outline"
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      </Box>
    </form>
  );
};

export default AddShelfForm;
