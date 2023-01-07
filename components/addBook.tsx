import React, { useState, FormEventHandler } from "react";
import { Author, Shelf } from "@prisma/client";
import { Form, Formik, ErrorMessage, FormikProps } from "formik";
import { Box, Input, FormLabel, Select, FormControl } from "@chakra-ui/react";

type AddBookProps = {
  onSave(bookData: any): Promise<void>;
  onCancel(): void;
  authors: Author[];
  shelves: Shelf[];
};

const AddBookForm: React.FC<AddBookProps> = ({
  onSave,
  onCancel,
  authors,
  shelves,
}) => {
  const [newAuthor, setNewAuthor] = useState(false);

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
    <Formik initialValues={initialValues} onSubmit={onSave}>
      {(props: FormikProps<any>) => (
        <Form>
          <FormControl mb="4">
            <FormLabel htmlFor="shelf">Bookshelf:</FormLabel>
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
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Book name"
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel htmlFor="genre">Genre</FormLabel>
            <Input type="text" name="genre" id="genre" placeholder="Fiction" />
          </FormControl>
          <FormControl mb="4">
            <FormLabel htmlFor="year">Year</FormLabel>
            <Input type="text" name="year" id="year" placeholder="2022" />
          </FormControl>
          <FormControl mb="4">
            <FormLabel htmlFor="read">Read?</FormLabel>
            <Input type="checkbox" name="read" value="read" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="author">Author</FormLabel>
            <Input as="select" name="author" id="author">
              {authors.map((author) => {
                return (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                );
              })}
            </Input>
            <button type="button" onClick={() => setNewAuthor(true)}>
              ...or add new author
            </button>

            {newAuthor && (
              <Box margin={2}>
                <input type="text" placeholder="Author's name"></input>
                <button type="button">Add new author</button>
              </Box>
            )}
          </FormControl>
          <section>
            <button type="submit">Save book</button>
          </section>
        </Form>
      )}
    </Formik>
  );
};

export default AddBookForm;
