import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import { useSearch } from "./hooks/useSearch";
import type { CatalogSearchScene } from "shared/catalog";

const Search: CatalogSearchScene = () => {
  const { search, setSearch } = useSearch();

  return (
    <TextInput
      size="sm"
      placeholder="Search products..."
      value={search}
      onChange={({ target: { value } }) => setSearch(value)}
      leftSection={<IconSearch />}
    />
  );
};

export default Search;
