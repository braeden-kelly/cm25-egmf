import type { FC } from "react";
import { Container, Flex } from "@mantine/core";
import { HomeLink, Links, MFESearch, Shortcuts } from "./components";

const styles = {
  Header: {
    Container: {
      backgroundColor: "#111827",
    },
  },
};

const Header: FC = () => {
  return (
    <header>
      <Container style={styles.Header.Container} fluid p="sm">
        <Flex justify="space-between" align="center" direction="row">
          <HomeLink />
          <MFESearch />
          <Links />
          <Shortcuts />
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
