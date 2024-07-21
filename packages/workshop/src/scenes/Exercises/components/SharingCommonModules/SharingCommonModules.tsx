import { Text } from "@mantine/core";
import ExerciseLayout from "../../shared/components/ExerciseLayout";

const SharingCommonModules = () => {
  return (
    <ExerciseLayout
      title="Sharing Common Modules"
      previous="../exercise-1"
      next="../exercise-3"
    >
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
