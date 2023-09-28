import {
  Text,
  Box,
  Button,
  SimpleGrid,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useShoppingCart } from "./ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export default function StoreItems({ id, name, price, img }: StoreItemProps) {
  console.log("items in store item ");
  console.log(name);
  const {
    getItems,
    increaseCount,
    decreaseCount,
    removeCart,
  } = useShoppingCart();
  const quantity = getItems(id);

  return (
    <Box>
      <SimpleGrid columns={{ base: 2, md: 4 }}>
        <VStack>
          <Image w="250px" h="200px" src={img} />
          <HStack>
            <Text justifyContent="space-between">
              {id}: {name}
            </Text>
            <Text> ${price}</Text>
          </HStack>
          <HStack>
            {quantity === 0 ? (
              <>
                <Button onClick={() => increaseCount(id)}>Add to cart</Button>
              </>
            ) : (
              <>
                <HStack>
                  <Button onClick={() => increaseCount(id)}>+</Button>
                  <Text>{quantity}</Text>
                  <Button onClick={() => decreaseCount(id)}>-</Button>
                </HStack>
                <Button w="100%" onClick={() => removeCart(id)}>
                  Remove
                </Button>
              </>
            )}
          </HStack>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
