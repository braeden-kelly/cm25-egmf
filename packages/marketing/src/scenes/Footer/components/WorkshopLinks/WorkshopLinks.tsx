import type { FC } from "react";

import FooterLinks from "../../shared/components/FooterLinks";

const WorkShopLinks: FC = () => {
  return (
    <FooterLinks
      title="Workshop"
      links={[
        { text: "Introduction", href: "#" },
        { text: "Documentation", href: "#" },
        { text: "Repo and Other Materials", href: "#" },
      ]}
    />
  );
};

export default WorkShopLinks;
