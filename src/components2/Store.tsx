import StoreItems from "./StoreItems";
import { Box } from "@chakra-ui/react";
import items from "../data/items.json";

export default function Store() {
  console.log("items in store");
  console.log(items);

  return (
    <Box>
      {items.map((item) => (
        <Box key={item.id}>
          <StoreItems {...item} />
        </Box>
      ))}
    </Box>
  );
}
