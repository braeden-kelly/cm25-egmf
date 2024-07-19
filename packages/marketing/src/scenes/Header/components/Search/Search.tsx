import { Suspense, lazy, type FC } from "react";

//@ts-ignore
const Search = lazy(() => import("catalog/search"));

const SearchContainer: FC = () => {
  return (
    <Suspense fallback="loading">
      <Search />
    </Suspense>
  );
};

export default SearchContainer;
