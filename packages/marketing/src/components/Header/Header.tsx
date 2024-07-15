import type { FC } from "react";
import { Container, Flex } from "@mantine/core";
import { HomeLink, Links, MFESearch, Shortcuts } from "./components";
import type { ShortcutsProps } from "./components";

const styles = {
  Header: {
    Container: {
      backgroundColor: "#111827",
    },
  },
};

export interface Props extends ShortcutsProps {}

const Header: FC<Props> = ({ onCartClick }) => {
  return (
    <Container sx={styles.Header.Container} fluid p="sm" component="header">
      <Flex justify="space-between" align="center" direction="row">
        <HomeLink />
        <MFESearch />
        <Links />
        <Shortcuts onCartClick={onCartClick} />
      </Flex>
    </Container>
  );
};

export default Header;
