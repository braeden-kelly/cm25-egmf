import type { FC } from "react";
import { Text, Group } from "@mantine/core";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ to, text }: { to: string; text: string }) => {
  return (
    <RouterLink to={to} style={{ textDecoration: "none" }}>
      <Text size="lg" c="white">
        {text}
      </Text>
    </RouterLink>
  );
};

const Links: FC = () => {
  return (
    <Group>
      <Link to="/" text="Home" />
      <Link to="/shop" text="Shop" />
      <Link to="/about" text="About" />
      <Link to="/contact" text="Contact" />
    </Group>
  );
};

export default Links;
