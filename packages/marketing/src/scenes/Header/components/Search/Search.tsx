import { Suspense, lazy } from "react";
import { Flex, Tooltip } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import { IconAlertTriangle } from "@tabler/icons-react";
import type { CatalogSearchScene } from "shared/catalog";
//@ts-ignore
const Search = lazy<CatalogSearchScene>(() => import("catalog/search"));

const SearchContainer: CatalogSearchScene = () => {
  return (
    <ErrorBoundary fallback={<SearchError />}>
      <Suspense>
        <Search />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SearchContainer;

const SearchError = () => {
  return (
    <Flex justify="center" align="center">
      <Tooltip label="Our search is having some issues">
        <IconAlertTriangle color="yellow" size={18} width={30} height={30} />
      </Tooltip>
    </Flex>
  );
};
