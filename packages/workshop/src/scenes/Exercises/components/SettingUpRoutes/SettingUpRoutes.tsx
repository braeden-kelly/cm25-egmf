import type { FC } from "react";

import { Code, List, Text, Title } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";

import ExerciseLayout from "../../shared/components/ExerciseLayout";

const SettingUpRoutes: FC = () => {
  return (
    <ExerciseLayout
      title="Setting Up Routes"
      next="../exercise-6"
      previous="../exercise-3"
    >
      <Text>
        You may continue from your work on the previous exercise, or check out a
        clean branch using the command below.
      </Text>
      <CodeHighlight
        my="lg"
        code="git checkout soln/adding-more-micro-frontends"
      />
      <Text>
        We have several pages left to set up for our application. Let's take a
        moment to wire up the following MFEs with their respective routes. Each
        MFE should maintain the site's layout.
      </Text>
      <List py="lg">
        <List.Item>
          <Code>marketing/about</Code> at <Code>/about</Code>
        </List.Item>
        <List.Item>
          <Code>marketing/contact</Code> at <Code>/contact</Code>
        </List.Item>
        <List.Item>
          <Code>profile/account</Code> at <Code>/account</Code>
        </List.Item>
      </List>
      <Text>
        Once added, you should be able to navigate to each page using the
        header. The account page can be reached by clicking on the user icon.
      </Text>

      <Title order={2} py="xl">
        Viewing Catalog Items
      </Title>
      <Text pt="md">
        Currently, there is no way to view the details of the items in the
        catalog list. Let's fix that. Create a dynamic segment under the{" "}
        <Code>/shop</Code>
        route so that <Code>shop/item/1</Code> and <Code>shop/item/2</Code>{" "}
        render the catalog/item MFE.
      </Text>
      <Text pt="md">
        After setting up the routes, update the <Code>CatalogItem</Code>{" "}
        component in
        <Code>catalog/src/scene/CatalogItem</Code> to use the dynamic path
        segment instead of the currently hard-coded id variable.
      </Text>
    </ExerciseLayout>
  );
};

export default SettingUpRoutes;
