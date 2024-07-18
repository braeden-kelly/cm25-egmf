import type { FC } from "react";

import { SimpleGrid, Flex } from "@mantine/core";

import WorkShopLinks from "./components/WorkshopLinks";
import CompanyLinks from "./components/CompanyLinks";
import CategoryLinks from "./components/CategoryLinks";
import BitoviLinks from "./components/BitoviLinks";

const Footer: FC = () => {
  return (
    <Flex
      component="footer"
      p="xl"
      bg="dark"
      c="white"
      align="center"
      justify="center"
    >
      <SimpleGrid
        cols={{ xs: 1, md: 2, lg: 4 }}
        w={{ sm: "sm", md: 800, lg: 1330, xl: 1400 }}
      >
        <WorkShopLinks />
        <CompanyLinks />
        <CategoryLinks />
        <BitoviLinks />
      </SimpleGrid>
    </Flex>
  );
};

export default Footer;
