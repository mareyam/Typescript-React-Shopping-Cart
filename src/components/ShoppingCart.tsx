import {
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};

export default function ShoppingCart() {
  const { closeCart, cartItems, isOpen, openCart } = useShoppingCart();

  return (
    <>
      <Button colorScheme="teal" onClick={openCart}>
        Open Cart
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={closeCart}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart items are</DrawerHeader>
          {cartItems.map((item) => (
            <CartItem {...item} />
          ))}
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={closeCart}>
              close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
