import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    primary: {
      100: "#E3F2FD",
      200: "#BBDEFB",
      300: "#90CAF9",
      400: "#64B5F6",
      500: "#42A5F5",
      600: "#2196F3",
      700: "#1E88E5",
      800: "#1976D2",
      900: "#1565C0",
    },
    secondary: {
      100: "#FCE4EC",
      200: "#F8BBD0",
      300: "#F48FB1",
      400: "#F06292",
      500: "#EC407A",
      600: "#E91E63",
      700: "#D81B60",
      800: "#C2185B",
      900: "#AD1457",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
