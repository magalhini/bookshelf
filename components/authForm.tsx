import React, { FC } from "react";
import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr"; // stale white revalidate
import { auth } from "../lib/mutations";

// swr handles data fetching (caching, optimistic updates, revalidating cache)

enum AuthType {
  SignIn = "signin",
  SignUp = "signup",
}

type Auth = "signin" | "signup";

const AuthForm: FC<{ mode: Auth }> = ({ mode }) => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await auth(mode, {
        email,
        password,
      });

      setIsLoading(false);
      router.push("/");
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  return (
    <Flex direction="column" bg="gray.50" color="black">
      <Box padding="50px" bg="gray.100" borderRadius="6px">
        <form onSubmit={handleSubmit}>
          <span>
            <Input
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              marginTop="10px"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              colorScheme="teal"
              marginTop="10px"
              color="white"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                "&:hover": {
                  bg: "green.300",
                },
              }}
            >
              {mode === AuthType.SignIn ? "Sign in" : "Sign up"}
            </Button>
            {error && <p>Something is not right</p>}
          </span>
        </form>
      </Box>
    </Flex>
  );
};

export default AuthForm;
