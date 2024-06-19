import type { FC } from "react";

import FooterLinks from "../../shared/components/FooterLinks";

export const links = [
  { text: "Introduction", href: "#" },
  { text: "Documentation", href: "#" },
  { text: "Repo and Other Materials", href: "#" },
];

const WorkShopLinks: FC = () => {
  return <FooterLinks title="Workshop" links={links} />;
};

export default WorkShopLinks;
