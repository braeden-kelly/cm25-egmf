import { Group, Text, Stack, Checkbox } from "@mantine/core";

const Checkboxes = ({
  checked,
  onChange,
  title,
  options,
}: {
  checked: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  options: string[];
}) => {
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
