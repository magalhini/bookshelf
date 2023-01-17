import React, { useState, FormEventHandler } from "react";
import { Author, Shelf } from "@prisma/client";
import { Form, Formik, ErrorMessage, FormikProps } from "formik";
import { InputControl, SelectControl } from "formik-chakra-ui";
import {
  Box,
  Button,
  FormLabel,
  Select,
  FormControl,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

type AuthorResponse = {
  authorId: number;
};

type AddBookProps = {
  onSave(bookData: any): Promise<void>;
  onCancel(): void;
  onAuthorSave(name: string): Promise<{ authorId: number }>;
  authors: Author[];
  shelves: Shelf[];
  error: string;
};

type AddAuthorModalProps = {
  isOpen: boolean;
  onSave(): void;
  onAuthorSave(name: string): Promise<AuthorResponse>;
  onClose(): void;
};

const AddAuthorModal: React.FC<AddAuthorModalProps> = ({
  isOpen,
  onClose,
  onAuthorSave,
}) => {
  const handleAddAuthor = async (props) => {
    const authorId = await onAuthorSave(props);
    if (authorId) {
      onClose();
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a new author</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik initialValues={{ name: "" }} onSubmit={handleAddAuthor}>
            {(props: FormikProps<any>) => (
              <form onSubmit={props.handleSubmit}>
                <FormControl mb="5">
                  <FormLabel htmlFor="author">Author name</FormLabel>
                  <InputControl name="name" placeholder="Author name" />
                </FormControl>
                <ModalFooter>
                  <Button type="submit" colorScheme="blue" mr={3}>
                    Save author
                  </Button>
                  <Button onClick={onClose} variant="ghost">
                    Cancel
                  </Button>
                </ModalFooter>
              </form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const AddBookForm: React.FC<AddBookProps> = ({
  onSave,
  onCancel,
  onAuthorSave,
  authors,
  shelves,
  error,
}) => {
  const [newAuthor, setNewAuthor] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValues = {
    title: "",
    author: authors[0].id,
    genre: "",
    year: "",
    read: false,
    rating: 0,
    shelf: shelves[0].id,
  };

  return (
    <>
      <AddAuthorModal
        onAuthorSave={onAuthorSave}
        isOpen={isOpen}
        onClose={onClose}
        onSave={() => {}}
      />

      <Formik initialValues={initialValues} onSubmit={onSave}>
        {(props: FormikProps<any>) => (
          <form onSubmit={props.handleSubmit}>
            <FormControl mb="4">
              <FormLabel htmlFor="shelf">Bookshelf</FormLabel>
              <Select placeholder="Select option" name="shelf" id="shelf">
                {shelves.map((shelf) => {
                  return (
                    <option key={shelf.id} value={shelf.id}>
                      {shelf.name}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl mb="4">
              <FormLabel htmlFor="title">Title</FormLabel>
              <InputControl name="title" id="title" placeholder="Book name" />
            </FormControl>
            <FormControl mb="4">
              <FormLabel htmlFor="genre">Genre</FormLabel>
              <InputControl name="genre" id="genre" placeholder="Fiction" />
            </FormControl>
            <FormControl mb="4">
              <FormLabel htmlFor="year">Year</FormLabel>
              <InputControl name="year" id="year" placeholder="2022" />
            </FormControl>
            <FormControl mb="4">
              <FormLabel htmlFor="read">Read?</FormLabel>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="author">Author</FormLabel>
              <SelectControl
                selectProps={{ placeholder: "Select an author" }}
                name="author"
                id="author"
              >
                {authors.map((author) => {
                  return (
                    <option key={author.id} value={author.id}>
                      {author.name}
                    </option>
                  );
                })}
              </SelectControl>

              <Button mt="6" onClick={onOpen}>
                Add a new author
              </Button>
            </FormControl>
            <Box mt="6">
              <Button type="submit" colorScheme="teal">
                Save book
              </Button>
              {error && <p>Something went wrong</p>}
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddBookForm;
