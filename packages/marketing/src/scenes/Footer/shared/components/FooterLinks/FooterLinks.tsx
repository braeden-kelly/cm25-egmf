import type { FC } from "react";

import { Anchor, Stack, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";

interface FooterLink {
  href: string;
  text: string;
  external: boolean;
}

interface FooterLinksProps {
  title: string;
  links: Array<FooterLink>;
}

const FooterLinks: FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <Stack>
      <Title order={3}>{title}</Title>
      {links.map((link, index) => (
        link.external 
        ? (
          <Anchor key={link.href + index} c="white" href={link.href}>
            {link.text}
          </Anchor>
        ) : (
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            key={link.href + index}
            to={link.href}
          >
            {link.text}
          </NavLink>
        )
      ))}
    </Stack>
  );
};

export default FooterLinks;
