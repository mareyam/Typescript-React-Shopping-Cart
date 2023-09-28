import {
  Box,
  Text,
  Image,
  HStack,
  SimpleGrid,
  Button,
  Container,
} from "@chakra-ui/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
type StoreItemsProps = {
  readonly id: number;
  name: string;
  price: number;
  img: string;
};

export default function StoreItems({ id, name, price, img }: StoreItemsProps) {
  const { getItems, increaseCount, decreaseCount, removeCart } =
    useShoppingCart();
  const quantity = getItems(id);

  return (
    <Container display="flex">
      <SimpleGrid columns={{ sm: 2, md: 3 }} border="2px solid">
        <Box key={id}>
          <Image w="300px" h="100px" src={img} />
          <HStack justifyContent="space-between">
            <Text>{name}</Text>
            <Text>${price}</Text>
          </HStack>
          <HStack>
            {quantity === 0 ? (
              <Button onClick={() => increaseCount(id)}>Add to cart</Button>
            ) : (
              <>
                <Button onClick={() => increaseCount(id)}>
                  <Text fontSize="8px">increase</Text>
                </Button>
                <Button fontSize="12px">{quantity}</Button>
                <Button fontSize="12px" onClick={() => decreaseCount(id)}>
                  <Text fontSize="8px">decrease</Text>
                </Button>
                <Button fontSize="12px" onClick={() => removeCart(id)}>
                  <Text fontSize="8px">remove</Text>
                </Button>
              </>
            )}
          </HStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
