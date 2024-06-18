import type { FC } from "react";
import { Text, Group } from "@mantine/core";
import { IconBuildingStore } from "@tabler/icons-react";

const HomeLink: FC = () => {
  return (
    <Group>
      <IconBuildingStore color="white" />
      <Text size="lg" c="white">
        Acme Store
      </Text>
    </Group>
  );
};

export default HomeLink;
