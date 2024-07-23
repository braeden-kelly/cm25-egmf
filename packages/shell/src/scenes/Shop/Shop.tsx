import { Suspense, lazy } from "react";
import { Grid } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";

import FilterSkeleton from "./components/FilterSkeleton";
import CatalogListSkeleton from "./components/CatalogListSkeleton";
import FilterError from "./components/FilterError";
import CatalogListError from "./components/CatalogListError";
import { CatalogFilterScene, CatalogListScene } from "shared/catalog";
import { ShopScene } from "shared/shell";

// @ts-ignore
const CatalogList = lazy<CatalogListScene>(() => import("catalog/list"));

// @ts-ignore
const Filter = lazy<CatalogFilterScene>(() => import("catalog/filter"));

const Shop: ShopScene = () => {
  return (
    <Grid>
      <Grid.Col span={{ sm: 12, md: 3 }}>
        <ErrorBoundary fallback={<FilterError />}>
          <Suspense fallback={<FilterSkeleton />}>
            <Filter />
          </Suspense>
        </ErrorBoundary>
      </Grid.Col>
      <Grid.Col span={{ sm: 12, md: 9 }}>
        <ErrorBoundary fallback={<CatalogListError />}>
          <Suspense fallback={<CatalogListSkeleton />}>
            <CatalogList />
          </Suspense>
        </ErrorBoundary>
      </Grid.Col>
    </Grid>
  );
};

export default Shop;
