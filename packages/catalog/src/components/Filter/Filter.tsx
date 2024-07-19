import type { FC } from "react";
import { Container, Divider } from "@mantine/core";
import { Categories, Filters } from "./components";

const Filter: FC = () => {

  function broadcastPriceChange(min: string, max: string) {
      document.dispatchEvent(
      new CustomEvent("catalog-filter-price", {
        detail: {
          min,
          max,
        },
      })
    );
  }

  return (
    <Container fluid px="md" w="350" py="lg">
      <Categories />
      <Divider mt="md" mb="lg" />
      <Filters onPriceChange={broadcastPriceChange}/>
    </Container>
  );
};

export default Filter;
