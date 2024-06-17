import { Anchor, Stack, Title } from "@mantine/core";
import type { FC } from "react";
import FooterLinks from "../../shared/components/FooterLinks";

const CompanyLinks: FC = () => {
  return (
    <FooterLinks
      title="Company"
      links={[
        { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
      ]}
    />
  );
};

export default CompanyLinks;
