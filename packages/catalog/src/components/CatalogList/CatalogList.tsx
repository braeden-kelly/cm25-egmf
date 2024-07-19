import { useEffect, useState, type FC } from "react";
import { Flex, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { CatalogListItem, SkeletonCatalogListItem } from "./components";
import { fetchProducts } from "../../api";
import { useParams } from "react-router-dom";
import type { FilterPriceEvent as CatalogFilterPriceEvent } from "src/dom";

const CatalogList: FC = () => {
  const { category } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: category ? ["products", "category", category] : ["products"],
    queryFn: fetchProducts,
  });
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  useEffect(() => {
    function handlePriceFilterChange(ev: CustomEvent<CatalogFilterPriceEvent>) {
      setMinPrice(ev.detail.min);
      setMaxPrice(ev.detail.max);
    }

    document.addEventListener("catalog-filter-price", handlePriceFilterChange);

    return () => {
      document.removeEventListener("catalog-filter-price", handlePriceFilterChange);
    }
  }, []);

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

  const filteredData = data?.filter(item => {
    return (!+minPrice || item.price >= +minPrice)
      && (!+maxPrice || item.price <= +maxPrice)
  })

  return (
    <Flex gap="md" direction="row" wrap="wrap" p="md">
      {filteredData?.map((product) => (
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
