import { Image, Text, Button, HStack, VStack } from "@chakra-ui/react";
import { useShoppingCart } from "./ShoppingCartContext";
import storeItems from "../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  console.log("items in cart item");
  console.log(item);

  return (
    <VStack >
      <Image src={item.img} />

      <HStack justifyContent="space-between">
        <Text>{item.name}</Text>

        <Text>${item.price}</Text>

        <Text>x{quantity}</Text>
      </HStack>
      <Button onClick={() => removeCart(item.id)}>remove item</Button>
    </VStack>
  );
}
