import { Suspense, lazy } from "react";
import { Flex } from "@mantine/core";

// @ts-ignore
const CatalogList = lazy(() => import("catalog/list"));

// @ts-ignore
const Filter = lazy(() => import("catalog/filter"));

const Shop = () => {
  return (
    <Flex>
      <Suspense fallback="loading">
        <Filter />
      </Suspense>
      <Suspense fallback="loading">
        <CatalogList />
      </Suspense>
    </Flex>
  );
};

export default Shop;
