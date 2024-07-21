import type { FC } from "react";

import { Title, Text, List, Anchor, Code, Alert } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

import ExerciseLayout from "../../shared/components/ExerciseLayout";

const GettingSetup: FC = () => {
  return (
    <ExerciseLayout title="Getting Setup" next="exercise-1">
      <Text>
        This workshop makes a couple assumptions about your development
        environment. Firstly you have node, npm and git setup on your computer.
        If you don't - no worries - the following links will help you out:
      </Text>
      <List py="lg">
        <List.Item>
          <Anchor href="#">npm & node</Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="#">git</Anchor>
        </List.Item>
      </List>
      <Text>
        Once npm, node, and git are installed, go ahead and install nx.
      </Text>
      <Code my="lg" block>
        npm i -g nx
      </Code>
      <Text>
        The materials for this workshop are in the following GitHub{" "}
        <Anchor href="">Repo</Anchor>.
      </Text>
      <Text>
        Once cloned, open the project in your IDE of choice - although this will
        be written with vscode in mind - and install the project dependencies.
      </Text>
      <Code my="lg" block>
        npm i
      </Code>
      <Text>Once installed, run the following command.</Text>
      <Code my="lg" block>
        npm run hello
      </Code>
      <Text>
        you should see the application opened with a “Hello Attendee!” message.
        Once you see the message you can go ahead and kill the dev server.
      </Text>
      <Title py="xl" order={2}>
        Nx
      </Title>
      <Text>
        Let's talk about Nx. We won't be covering how to use nx apart from what
        we need to run our application. This workshop is in a package-base nx
        project. A package is any project located in the packages directory.
      </Text>
      <Text pt="md">
        To run a command in a single package you can use the following pattern
      </Text>
      <Code my="lg" block>
        {`nx run <package-name>:<npm-script-name>`}
      </Code>
      <Text>
        Try running the dev command in the shell package. Look familiar? (You
        should see “Hello Attendee”)
      </Text>
      <Text pt="md">
        You can also run multiple project commands of the same name using
        run-many instead of run using the following pattern.
      </Text>
      <Code my="lg" block>
        {`nx run-many -t <command>`}
      </Code>
      <Text>Try running the dev command with run-many</Text>
      <Alert title="A Quick Note on run-many" icon={<IconInfoCircle />} my="xl">
        run-many only runs three processes by default. To run more than three,
        you can add the parallel flag to run more than that{" "}
        {`(--parallel=<number-you-want-to-run>)`}
      </Alert>
      <Text>If you got this far, congrats! You're all setup!</Text>
    </ExerciseLayout>
  );
};

export default GettingSetup;
