import { Box, Container, Divider, Flex } from "@mantine/core";

import HomeLink from "./components/HomeLink";
import Search from "./components/Search";
import Links from "./components/Links";
import Shortcuts from "./components/Shortcuts";

const Header = () => {
  return (
    <Container py="md" fluid bg="dark">
      <Flex justify="space-between" align="center">
        <HomeLink />
        <Links />
        <Flex gap="md">
          <Search />
          <Divider orientation="vertical" />
          <Shortcuts />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
