import type { FC } from "react";

import FooterLinks from "../../shared/components/FooterLinks";

export const links = [
  { text: "About Us", href: "/about" },
  { text: "Contact Us", href: "/contact" },
];

const CompanyLinks: FC = () => {
  return <FooterLinks title="Company" links={links} />;
};

export default CompanyLinks;
