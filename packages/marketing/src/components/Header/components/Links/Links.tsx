import type { FC } from "react";
import { Text, Group } from "@mantine/core";

const Links: FC = () => {
  return (
    <Group>
      <Text size="lg" c="white">
        Homes
      </Text>
      <Text size="lg" c="white">
        Shop
      </Text>
      <Text size="lg" c="white">
        About
      </Text>
      <Text size="lg" c="white">
        Contact
      </Text>
    </Group>
  );
};

export default Links;
