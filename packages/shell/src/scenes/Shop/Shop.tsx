import { Suspense, lazy } from "react";
import { Flex, Grid } from "@mantine/core";
import FilterSkeleton from "./components/FilterSkeleton";
import CatalogListSkeleton from "./components/CatalogListSkeleton/CatalogListSkeleton";

// @ts-ignore
const CatalogList = lazy(() => import("catalog/list"));

// @ts-ignore
const Filter = lazy(() => import("catalog/filter"));

const Shop = () => {
  return (
    <Flex justify="center" align="center">
      <Grid w={{ sm: "sm", md: 800, lg: 1330, xl: 1400 }}>
        <Grid.Col span={{ sm: 12, md: 2 }}>
          <Suspense fallback={<FilterSkeleton />}>
            <Filter />
          </Suspense>
        </Grid.Col>
        <Grid.Col span={{ sm: 12, md: 10 }}>
          <Suspense fallback={<CatalogListSkeleton />}>
            <CatalogList />
          </Suspense>
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default Shop;
