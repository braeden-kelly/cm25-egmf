import { Alert, Code, Flex, Image, Text } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

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

const ConfiguringModuleFederation = () => {
  return (
    <ExerciseLayout
      title="Configuring Module Federation"
      next="../exercise-2"
      previous="../set-up"
    >
      <Text>Start by checking out this branch</Text>
      <Code my="lg" block>
        git checkout exercise-1
      </Code>
      <Text>
        Go ahead and do a little bit of poking around to get familiar with the
        project. Inside packages there are six projects (you can ignore workshop
        that's where all these exercises are located). The scenes folder inside
        of src contains all the MFEs we will use for our projects.
      </Text>

      <Text pt="md">
        Using module federation, pull the Header, Footer, Filter, and
        CatalogList into the root of the shell application. Use the image below
        as a guide, the layout for the page is provided.
      </Text>
      <Flex my="lg" align="center" justify="center">
        <Image w={500} src={diagram} />
      </Flex>
      <Text>
        Module Federation can be configured in the{" "}
        <Code>rsbuild.config.ts</Code> file (shown below).
      </Text>
      <Code my="lg" block>
        {buildConfig}
      </Code>
      <Text>
        The Header and Footer can be found in the marketing project. As a
        reminder, you can run a package command using{" "}
        <Code>{`nx run <package>:<command>`}</Code>. The host and the remote
        must be running for module federation to work.
      </Text>
      <Alert title="Quick Tip" icon={<IconInfoCircle />} my="xl">
        Quick Tip: For those unfamiliar with React.lazy you must wrap the
        components in a Suspense boundary.
        <Code my="lg" block>
          {reactLazy}
        </Code>
      </Alert>
    </ExerciseLayout>
  );
};

export default ConfiguringModuleFederation;
