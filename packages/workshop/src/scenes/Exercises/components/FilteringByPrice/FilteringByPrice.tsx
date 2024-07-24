import type { FC } from "react";

import ExerciseLayout from "../../shared/components/ExerciseLayout";
import { Text, Code } from "@mantine/core";

const useQuery = `const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });`;

const theFilter = `const filterForPrice = (item: CatalogItem): boolean => {
    return (
      (!+minPrice || item.price >= +minPrice) &&
      (!+maxPrice || item.price <= +maxPrice)
    );
  }`;

const FilteringByPrice: FC = () => {
  return (
    <ExerciseLayout
      title="Filtering by Price"
      previous="../exercise-7"
      next="../exercise-9"
    >
      <Text>
        Another area we need to add custom eventing to is the catalog filter.
        Like the cart, we need to set up the state, the listeners, and the
        dispatching. All of the logic should be added to the catalog project.
        The event should be called <Code>catalog-filter-price</Code> and have
        the following shape.
      </Text>
      <Code
        block
        py="lg"
      >{`type FilterPriceEvent = { min: string; max: string };`}</Code>
      <Text>
        The min and max should correspond to the input to the min and max text
        fields in the Filters component.
      </Text>
      <Text pt="md">
        The listener should be added to the <Code>useCatalogList</Code> hook in{" "}
        <Code>CatalogList</Code>. The list itself comes out of the{" "}
        <Code>useQuery</Code> hook as data.
      </Text>
      <Code py="lg" block>
        {useQuery}
      </Code>
      <Text>
        The data will need to be filtered based on the min and max from the
        event. You can use the following filter function to achieve this
      </Text>
      <Code py="lg" block>
        {theFilter}
      </Code>
    </ExerciseLayout>
  );
};

export default FilteringByPrice;
