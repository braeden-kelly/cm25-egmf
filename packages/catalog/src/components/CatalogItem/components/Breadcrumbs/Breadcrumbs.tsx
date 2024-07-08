import type { FC } from "react";
import { Text, Group } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

const Breadcrumbs: FC<{ name: string }> = ({ name }) => {
  return (
    <Group gap="xs">
      <Text size="sm" c="dark">
        Home
      </Text>
      <IconChevronRight size={18} />
      <Text size="sm" c="dark">
        Products
      </Text>
      <IconChevronRight size={18} />
      <Text
        size="sm"
        c="black"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          maxWidth: 400,
        }}
      >
        {name}
      </Text>
    </Group>
  );
};

export default Breadcrumbs;
