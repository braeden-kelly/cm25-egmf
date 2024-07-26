import type { FC } from "react";

import { Accordion, Code, Flex, Image, List, Text, Title } from "@mantine/core";
import { CodeHighlight, CodeHighlightTabs } from "@mantine/code-highlight";

import ExerciseLayout from "../../shared/components/ExerciseLayout";

import diagram from "./assets/diagram.png";

const buildConfig = `export default defineConfig({
  // ... other plugins
  moduleFederation: {
    options: {
      // plugin options
    },
  },
});`;

const reactLazy = `const LazilyImported = React.lazy(() => import(...))

//

<Suspense fallback='loading'>
  <LazilyImported />
</Suspense>`;

const shared = `
 const shared = {
        react: {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-dom": {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-router-dom": {
          requiredVersion: "^6.23.1",
          singleton: true,
        },
    }`;

const ConfiguringModuleFederation: FC = () => {
  return (
    <ExerciseLayout
      title="Configuring Module Federation"
      next="../exercise-2"
      previous="../set-up"
    >
      <Text>Start by checking out this branch</Text>
      <CodeHighlight
        my="lg"
        lang="sh"
        code="git checkout exercise/configuring-module-federation"
      />
      <Text>
        Go ahead and do a little bit of poking around to get familiar with the
        project. Inside packages there are six projects (you can ignore workshop
        that's where all these exercises are located). The scenes folder inside
        of src contains all the MFEs we will use for our projects.
      </Text>

      <Title py="xl" order={2}>
        Exercise
      </Title>
      <Text>
        Using module federation, pull the Header, Footer, Filter, and
        CatalogList into the <Code>/shop</Code> section of the shell
        application. The Header and Footer can be placed in the placeholders
        inside <Code>shell/src/components/Layout</Code> and the Filter and
        Catalog in <Code>shell/src/scenes/Shop</Code>.
      </Text>

      <Text pt="md">To accomplish this you'll need to:</Text>
      <List py="lg">
        <List.Item>
          Create the types for the modules and namespaces for the projects and
          MFEs
        </List.Item>
        <List.Item>
          Update the types of the MFEs to be consumed (the Header, the Footer,
          the Filter and the Catalog List)
        </List.Item>
        <List.Item>Expose the MFEs in their respective projects</List.Item>
        <List.Item>Consume the MFEs in the shell application</List.Item>
        <List.Item>Add any shared modules</List.Item>
      </List>

      <Text pt="md">
        The Header and Footer can be found in the marketing project in their
        respective scenes. Likewise, the Filter and Catalog in the catalog
        project.
      </Text>
      <Text pt="md">
        Module Federation can be configured in the{" "}
        <Code>rsbuild.config.ts</Code> file
      </Text>

      <CodeHighlightTabs
        my="lg"
        code={[
          { fileName: "rsbuild.config.ts", language: "ts", code: buildConfig },
        ]}
      />
      <Text>
        Use the image below as a guide, the layout for the page is provided.
      </Text>
      <Flex my="lg" align="center" justify="center">
        <Image w={500} src={diagram} />
      </Flex>
      <Accordion>
        <Accordion.Item value="hint">
          <Accordion.Control>
            Running into errors? Did you share the correct modules?
          </Accordion.Control>
          <Accordion.Panel>
            <CodeHighlight code={shared} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </ExerciseLayout>
  );
};

export default ConfiguringModuleFederation;
