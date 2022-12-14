import "../styles/globals.css";
import { StoreProvider } from "easy-peasy";
import type { AppProps } from "next/app";
import {
  ChakraProvider,
  Container,
  extendTheme,
  Heading,
} from "@chakra-ui/react";
import "reset-css";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth="container.xl" p="4rem">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
};

export default MyApp;
