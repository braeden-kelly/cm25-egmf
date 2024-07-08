import type { FC } from "react";
import { Stack, Text } from "@mantine/core";

const Reviews: FC = () => {
  return (
    <Stack>
      <Text size="lg" fw={700}>
        Reviews
      </Text>
      {[...Array(3)].map((_, index) => (
        <Review />
      ))}
    </Stack>
  );
};

export default Reviews;

const Review: FC = () => {
  return (
    <Stack gap="md">
      <Text size="sm" c="dark">
        <strong>John Doe</strong> - 5/5
      </Text>
      <Text size="md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Stack>
  );
};
