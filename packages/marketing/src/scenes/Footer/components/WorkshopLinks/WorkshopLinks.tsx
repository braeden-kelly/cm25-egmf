import type { FC } from "react";

import FooterLinks from "../../shared/components/FooterLinks";

export const links = [
  { text: "Introduction", href: "#", external: true },
  { text: "Documentation", href: "#", external: true },
  { text: "Repo and Other Materials", href: "#", external: true },
];

const WorkShopLinks: FC = () => {
  return <FooterLinks title="Workshop" links={links} />;
};

export default WorkShopLinks;
