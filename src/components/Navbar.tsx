import { Box, Button } from "@chakra-ui/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Box>
      <Button onClick={openCart}>Cart</Button>
      {cartQuantity > 0 && <Box>{cartQuantity}</Box>}
    </Box>
  );
}
