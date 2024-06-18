import type { FC } from "react";
import { Container, Divider } from "@mantine/core";
import { Categories, Filters } from "./components";

const Filter: FC = () => {
  return (
    <Container fluid px="md" w="350" py="lg">
      <Categories />
      <Divider mt="md" mb="lg" />
      <Filters />
    </Container>
  );
};

export default Filter;
