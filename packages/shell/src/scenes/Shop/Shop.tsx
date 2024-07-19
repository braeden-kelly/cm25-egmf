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
    <Grid>
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
  );
};

export default Shop;
