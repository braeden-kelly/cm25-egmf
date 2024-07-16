import type { FC } from "react";
import { Flex, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { CatalogListItem, SkeletonCatalogListItem } from "./components";
import { fetchProducts } from "../../api";
import { useParams } from "react-router-dom";

const CatalogList: FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const { category } = useParams();

  if (isLoading) {
    return (
      <Flex gap="md" direction="row" wrap="wrap" p="md">
        {[...Array(12)].map((_, index) => (
          <SkeletonCatalogListItem key={index} />
        ))}
      </Flex>
    );
  }

  if (isError) {
    return (
      <Flex p="md">
        <Text c="red" fw="bold">
          Error fetching data. Please try again later.
        </Text>
      </Flex>
    );
  }

  const filteredData = category
    ? data?.filter(item => item.category === category)
    : data;

  return (
    <Flex gap="md" direction="row" wrap="wrap" p="md">
      {filteredData?.map((product) => (
        <CatalogListItem
          key={product.name}
          href={product.href}
          imgSrc={product.imgSrc}
          name={product.name}
          price={product.price}
        />
      ))}
    </Flex>
  );
};

export default CatalogList;
