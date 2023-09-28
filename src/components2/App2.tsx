import React from "react";
import Store from "./Store";
import ShoppingCart from "./ShoppingCart";
import { Box } from "@chakra-ui/react";

const App2 = () => {
  return (
    <Box display="flex">
      <Box w="100%">
        <Store />
      </Box>
      <Box w="10%">
        <ShoppingCart />
      </Box>
    </Box>
  );
};

export default App2;
