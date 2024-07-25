import type { FC } from "react";
import ExerciseLayout from "../../shared/components/ExerciseLayout";
import { Accordion, Code, List, Text } from "@mantine/core";

const query = `const oldQueryKey = ['products']

// where category is the currently selected category
const newQueryKey = ["products", "category", category]`;

const ShopCategories: FC = () => {
  return (
    <ExerciseLayout
      title="Shop Categories"
      previous="../exercise-8"
      next="../exercise-10"
    >
      <Text>
        Now that we've set up custom eventing for our application let's continue
        our exploration of micro-frontend-to-micro-frontned communication using
        the URL, particularly how to use path parameters to enable
        communication.{" "}
      </Text>
      <Accordion py="lg">
        <Accordion.Item value="refresher">
          <Accordion.Control>
            Expand for a quick refresher on routing
          </Accordion.Control>
          <Accordion.Panel>
            <List py="lg">
              <List.Item>
                Index routes default child route for a path (<Code>/</Code>)
              </List.Item>
              <List.Item>
                Simple paths match exact routes (e.g., <Code>/about</Code>)
              </List.Item>
              <List.Item>
                Dynamic segments can be included with a colon (e.g.,{" "}
                <Code>/user/:id</Code>)
                <List>
                  <List.Item>
                    The path param can be accessed using <Code>useParams</Code>
                  </List.Item>
                </List>
              </List.Item>
              <List.Item>
                Wildcard <Code>*</Code> matches any route
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Text>
        Currently, our catalog list (<Code>catalog/list</Code>) is being loaded
        into a static path (<Code>/shop</Code>); however, we'd like to be able
        to navigate to different categories using the filters MFE (
        <Code>catalog/filters</Code>). The filters component has four
        categories, each navigating to its URL-encoded namesake.
      </Text>
      <List py="lg">
        <List.Item>
          Men's Clothing - <Code>/shop/men%27s%20clothing</Code>
        </List.Item>
        <List.Item>
          Women's Clothing - <Code>/shop/women%27s%20clothing</Code>
        </List.Item>
        <List.Item>
          Electronics - <Code>/shop/electronics</Code>
        </List.Item>
        <List.Item>
          Jewelry - <Code>/shop/jewelry</Code>
        </List.Item>
      </List>
      <Text>
        The goal of this exercise is to update the routing logic in the shell
        application to load the catalog list into these paths and update the
        <Code>useCatalogList</Code> hook to read the path segment and filter the
        list data accordingly.
      </Text>
      <Text pt="md">
        You already have the services to update the useCatalogList hook. Once
        you have the category, you can update the queryKey configuration for the
        useQuery hook as follows:
      </Text>
      <Code block my="lg">
        {query}
      </Code>
    </ExerciseLayout>
  );
};

export default ShopCategories;
