import React from "react";
import {
  Flex,
  Text,
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { InputControl } from "formik-chakra-ui";
import { Form, Formik, FormikProps } from "formik";

type AddAuthorProps = {
  onSave(): void;
};

type FormValues = {
  name: string;
};

const AddAuthor: React.FC<AddAuthorProps> = ({ onSave }) => {
  const router = useRouter();

  const onAuthorSave = async (authorData) => {
    console.log(authorData);
    fetch("/api/author/create", {
      method: "POST",
      body: JSON.stringify(authorData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.authorId) {
          router.push("/bookshelf/all");
        }
      });
  };

  return (
    <Flex direction="column">
      <Heading as="h1" mb="5">
        Add a new author
      </Heading>

      <Formik initialValues={{ name: "" }} onSubmit={onAuthorSave}>
        {(props: FormikProps<FormValues>) => (
          <form onSubmit={props.handleSubmit}>
            <FormControl mb="5">
              <FormLabel htmlFor="author">Author name</FormLabel>
              <InputControl name="name" placeholder="Author name" />
            </FormControl>
            <Button type="submit" colorScheme="teal">
              Add new
            </Button>
          </form>
        )}
      </Formik>
    </Flex>
  );
};

export default AddAuthor;
