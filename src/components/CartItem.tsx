import { Image,  Text, Button, HStack } from "@chakra-ui/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <HStack>
      <Image src={item.img} />
      <Text>{item.price}</Text>
      <Button onClick={() => removeCart(item.id)}></Button>
    </HStack>
  );
}
