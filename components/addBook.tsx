import React, { FormEventHandler } from "react";
import { Author, Shelf } from "@prisma/client";
import { Field, Form, Formik, ErrorMessage, FormikProps } from "formik";

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
          <section>
            <label htmlFor="shelf">Bookshelf:</label>
            <Field as="select" name="shelf" id="shelf">
              {shelves.map((shelf) => {
                return (
                  <option key={shelf.id} value={shelf.id}>
                    {shelf.name}
                  </option>
                );
              })}
            </Field>
          </section>
          <section>
            <label htmlFor="title">Title</label>
            <Field
              type="text"
              name="title"
              id="title"
              placeholder="Book name"
            />
          </section>
          <section>
            <label htmlFor="genre">Genre</label>
            <Field type="text" name="genre" id="genre" placeholder="Fiction" />
          </section>
          <section>
            <label htmlFor="year">Year</label>
            <Field type="text" name="year" id="year" placeholder="2022" />
          </section>
          <section>
            <label htmlFor="read">Read?</label>
            <Field type="checkbox" name="read" value="read" />
          </section>
          <section>
            <label htmlFor="author">Author</label>
            <Field as="select" name="author" id="author">
              {authors.map((author) => {
                return (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                );
              })}
            </Field>
          </section>
          <section>
            <button type="submit">Save book</button>
          </section>
        </Form>
      )}
    </Formik>
  );
};

export default AddBookForm;
