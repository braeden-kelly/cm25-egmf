import type { FC } from "react";
import { Group, Text, Stack, Checkbox } from "@mantine/core";

const Checkboxes: FC<{
  checked: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  options: string[];
}> = ({ checked, onChange, title, options }) => {
  return (
    <Stack gap="xs">
      <Text size="lg" c="dark">
        {title}
      </Text>
      <Group>
        {options.map((option) => (
          <Checkbox
            key={option}
            label={option}
            name={option}
            checked={checked.includes(option)}
            onChange={onChange}
          />
        ))}
      </Group>
    </Stack>
  );
};

export default Checkboxes;
