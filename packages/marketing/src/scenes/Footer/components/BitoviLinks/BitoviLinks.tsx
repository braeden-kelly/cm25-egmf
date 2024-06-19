import type { FC } from "react";

import FooterLinks from "../../shared/components/FooterLinks";

export const links = [
  {
    text: "Frontend Development",
    href: "https://www.bitovi.com/services/frontend-development-consulting",
  },
  {
    text: "Project Management",
    href: "https://www.bitovi.com/services/agile-project-management-consulting",
  },
  {
    text: "Product Design",
    href: "https://www.bitovi.com/services/product-design-consulting",
  },
  {
    text: "Backend Development",
    href: "https://www.bitovi.com/services/backend-engineering-consulting",
  },
  {
    text: "DevOps",
    href: "https://www.bitovi.com/services/devops-consulting",
  },
];

const BitoviLinks: FC = () => {
  return <FooterLinks title="Bitovi" links={links} />;
};

export default BitoviLinks;
