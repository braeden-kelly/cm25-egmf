import { render, screen } from "@testing-library/react";

import MarketingWrapper from "@test/MarketingWrapper";

import CategoryLinks, { links } from "./CategoryLinks";

describe("<CategoryLinks />", () => {
  it("renders", () => {
    const title = "Shop";

    render(<CategoryLinks />, {
      wrapper: MarketingWrapper,
    });

    expect(screen.getByText(title)).toBeInTheDocument();

    links.forEach((link) => {
      const domLink = screen.getByText(link.text);

      expect(domLink).toBeInTheDocument();
      expect(domLink).toHaveAttribute("href", link.href);
    });
  });
});
