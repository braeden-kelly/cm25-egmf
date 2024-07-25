import type { FC } from "react";

import ExerciseLayout from "../../shared/components/ExerciseLayout";

import { Code, Text } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";

const code = `const searchFilter = (item: CatalogItem) => {
  return !search || item.name.toLowerCase().includes(search.toLowerCase());
}`;

const SearchingTheCatalog: FC = () => {
  return (
    <ExerciseLayout
      title="Searching the Catalog"
      previous="../exercise-9"
      next="../complete"
    >
      <Text>
        Let's finish our journey through URL-based communication for
        micro-frontends. The last big missing piece of functionality is our
        search.
      </Text>
      <Text pt="md">
        The search functionality needs to be added to the URL using a query
        parameter called search in the <Code>useSearch</Code> hook within the
        search micro-frontend (<Code>catalog/search</Code>). The hook is already
        wired up to the search bar.
      </Text>
      <Text pt="md">
        Once added, the catalog list needs to be updated based on the newly
        added search parameter. Update the <Code>useCatalogList</Code> hook to
        filter the data based on the search text. A filter is provided below for
        convenience.
      </Text>
      <CodeHighlight code={code} my="lg" />
    </ExerciseLayout>
  );
};

export default SearchingTheCatalog;
