import type { FC } from "react";

import { Anchor, Stack, Title } from "@mantine/core";

interface FooterLink {
  href: string;
  text: string;
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
        <Anchor key={link.href + index} c="white" href={link.href}>
          {link.text}
        </Anchor>
      ))}
    </Stack>
  );
};

export default FooterLinks;
