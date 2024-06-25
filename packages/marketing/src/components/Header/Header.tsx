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
    <Container sx={styles.Header.Container} fluid p="sm" component="header">
      <Flex justify="space-between" align="center" direction="row">
        <HomeLink />
        <MFESearch />
        <Links />
        <Shortcuts />
      </Flex>
    </Container>
  );
};

export default Header;
