import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App2 from "./components2/App2.tsx";
import { ShoppingCartProvider } from "./components2/ShoppingCartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ShoppingCartProvider>
    <ChakraProvider>
      <App2 />
    </ChakraProvider>
  </ShoppingCartProvider>
);
