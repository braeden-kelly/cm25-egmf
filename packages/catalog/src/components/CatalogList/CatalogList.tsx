import type { FC } from "react";
import { Flex } from "@mantine/core";
import { CatalogListItem, CatalogListItemProps } from "./components";

const CatalogList: FC = () => {
  return (
    <Flex gap="md" direction="row" wrap="wrap" p="md">
      {products.map((product) => (
        <CatalogListItem key={product.href} {...product} />
      ))}
    </Flex>
  );
};

export default CatalogList;

const products: CatalogListItemProps[] = [
  {
    href: "/product/1",
    name: "Product 1",
    price: 99.99,
    imgSrc: "https://via.placeholder.com/250x200",
  },
  {
    href: "/product/2",
    name: "Product 2",
    price: 199.99,
    imgSrc: "https://via.placeholder.com/250x200",
  },
  {
    href: "/product/3",
    name: "Product 3",
    price: 299.99,
    imgSrc: "https://via.placeholder.com/250x200",
  },
  {
    href: "/product/4",
    name: "Product 4",
    price: 399.99,
    imgSrc: "https://via.placeholder.com/250x200",
  },
  {
    href: "/product/5",
    name: "Product 5",
    price: 499.99,
    imgSrc: "https://via.placeholder.com/250x200",
  },
  {
    href: "/product/6",
    name: "Product 6",
    price: 599.99,
    imgSrc: "https://via.placeholder.com/250x200",
  },
  {
    href: "/product/7",
    name: "Product 7",
    price: 699.99,
    imgSrc: "https://via.placeholder.com/250x200",
  },
  {
    href: "/product/8",
    name: "Product 8",
    price: 799.99,
    imgSrc: "https://via.placeholder.com/250x200",
  },
  {
    href: "/product/9",
    name: "Product 9",
    price: 899.99,
    imgSrc: "https://via.placeholder.com/250x200",
  },
  {
    href: "/product/10",
    name: "Product 10",
    price: 999.99,
    imgSrc: "https://via.placeholder.com/250x200",
  },
];
