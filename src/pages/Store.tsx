import StoreItems  from "../components/StoreItems";
import items from "../data/items.json";
import { Box } from "@chakra-ui/react";

export default function Store() {
  return (
    <>
      {items.map((item) => (
        <Box key={item.id}>
          <StoreItems {...item} />
        </Box>
      ))}
    </>
  );
}
