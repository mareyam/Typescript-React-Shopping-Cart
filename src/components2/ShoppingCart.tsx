import {
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Text,
  Box,
} from "@chakra-ui/react";
import { useShoppingCart } from "./ShoppingCartContext";
import CartItem from "./CartItem";

// type ShoppingCartProps = {
//   isOpen: boolean;
// };

export default function ShoppingCart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Open Cart
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart items are</DrawerHeader>

          <Box overflowY="scroll">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Box>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
