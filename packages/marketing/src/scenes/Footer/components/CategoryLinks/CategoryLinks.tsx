import type { FC } from "react";

import FooterLinks from "../../shared/components/FooterLinks";

export const links = [
  { text: "Electronics", href: "#" },
  { text: "Jewelry", href: "#" },
  { text: "Men's Clothing", href: "#" },
  { text: "Women's Clothing", href: "#" },
];

const CategoryLinks: FC = () => {
  return <FooterLinks title="Shop" links={links} />;
};

export default CategoryLinks;
