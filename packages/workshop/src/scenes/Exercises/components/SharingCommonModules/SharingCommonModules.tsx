import type { FC } from "react";

import { Text } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";

import ExerciseLayout from "../../shared/components/ExerciseLayout";

const SharingCommonModules: FC = () => {
  return (
    <ExerciseLayout
      title="Sharing Common Modules"
      previous="../exercise-1"
      next="../exercise-3"
    >
      <Text>
        You may continue from your work on Exercise 1, or check out a clean
        branch using the command below.
      </Text>
      <CodeHighlight my="lg" code="git checkout exercise-2" />
      <Text>
        These applications have some dependencies that are good candidates for
        sharing via Module Federation. Create a list of libraries you think
        should be shared and configure the Module Federation plugin to share
        them. Once added, run the application to ensure everything still works.
      </Text>
      <Text pt="md">
        Be prepared to discuss why the library is a good candidate for sharing
        and why you chose the sharing configuration (singleton, eager, etc.) you
        did for each library.
      </Text>
    </ExerciseLayout>
  );
};

export default SharingCommonModules;
