import type { FC } from "react";

import { SimpleGrid, Container } from "@mantine/core";

import WorkShopLinks from "./components/WorkshopLinks";
import CompanyLinks from "./components/CompanyLinks";
import CategoryLinks from "./components/CategoryLinks";
import BitoviLinks from "./components/BitoviLinks";

const Footer: FC = () => {
  return (
    <Container component="footer" fluid p="xl" bg="dark" c="white">
      <SimpleGrid cols={{ xs: 1, md: 2, lg: 4 }}>
        <WorkShopLinks />
        <CompanyLinks />
        <CategoryLinks />
        <BitoviLinks />
      </SimpleGrid>
    </Container>
  );
};

export default Footer;
