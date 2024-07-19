import type { FC } from "react";

import FooterLinks from "../../shared/components/FooterLinks";

export const links = [
  { text: "Electronics", href: "/shop/electronics", external: false },
  { text: "Jewelry", href: "/shop/jewelery", external: false },
  { text: "Men's Clothing", href: "/shop/men%27s%20clothing", external: false },
  { text: "Women's Clothing", href: "/shop/women%27s%20clothing", external: false },
];

const CategoryLinks: FC = () => {
  return <FooterLinks title="Shop" links={links} />;
};

export default CategoryLinks;
