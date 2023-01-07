import { Flex, Heading } from "@chakra-ui/react";
import AuthForm from "../components/authForm";

const Signin = () => {
  return (
    <Flex
      height="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading mb="5">Bookshelfy</Heading>
      <AuthForm mode="signin" />
    </Flex>
  );
};

Signin.authPage = true;

export default Signin;
