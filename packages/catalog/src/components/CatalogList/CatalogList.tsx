import type { FC } from "react";
import { Flex, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { CatalogListItem, SkeletonCatalogListItem } from "./components";
import { fetchProducts } from "../../api";
import { useParams } from "react-router-dom";

const CatalogList: FC = () => {
  const { category } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: category ? ["products", "category", category] : ["products"],
    queryFn: fetchProducts,
  });

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

  return (
    <Flex gap="md" direction="row" wrap="wrap" p="md">
      {data?.map((product) => (
        <CatalogListItem
          key={product.name}
          {...product}
          href={`/shop/item/${product.href}`}
        />
      ))}
    </Flex>
  );
};

export default CatalogList;
