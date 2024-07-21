import type { FC } from "react";

import FooterLinks from "../../shared/components/FooterLinks";

export const links = [
  { text: "Introduction", href: "/", external: false },
  { text: "Documentation", href: "/", external: false },
  {
    text: "Repo and Other Materials",
    href: "https://github.com/bitovi/enterprise-grade-micro-frontends",
    external: true,
  },
];

const WorkShopLinks: FC = () => {
  return <FooterLinks title="Workshop" links={links} />;
};

export default WorkShopLinks;
