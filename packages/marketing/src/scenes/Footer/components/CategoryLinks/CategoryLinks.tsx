import type { FC } from "react";

import FooterLinks from "../../shared/components/FooterLinks";

const CategoryLinks: FC = () => {
  return (
    <FooterLinks
      title="Shop"
      links={[
        { text: "Electronics", href: "#" },
        { text: "Jewelry", href: "#" },
        { text: "Men's Clothing", href: "#" },
        { text: "Women's Clothing", href: "#" },
      ]}
    />
  );
};

export default CategoryLinks;
