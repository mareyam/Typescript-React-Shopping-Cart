import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { useShoppingCart } from "./ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div>
      Navbar
      <Button onClick={openCart}>cart</Button>
      <Text>quantity is {cartQuantity}</Text>
    </div>
  );
};

export default Navbar;
