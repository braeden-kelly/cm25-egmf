import type { FC } from "react";

import { TextInput, Container, Flex } from "@mantine/core";

const Header: FC = () => {
  return (
    <header>
      <Container bg="blue" fluid p="sm">
        <Flex justify="space-between" align="center" direction="row">
          <div>Acme Store</div>
          <div>
            <SearchMFE />
          </div>
          <div>Cart</div>
        </Flex>
      </Container>
    </header>
  );
};

const SearchMFE: FC = () => {
  return <TextInput placeholder="Search products..." size="md" />;
};

export default Header;
