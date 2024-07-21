import type { FC, ReactNode } from "react";

import { Title, Flex, Box } from "@mantine/core";

import ChangeExercise from "./components/ChangeExercise";

interface ExerciseLayoutProps {
  children?: ReactNode;
  title: string;
  next?: string;
  previous?: string;
}

const ExerciseLayout: FC<ExerciseLayoutProps> = ({
  children,
  title,
  next,
  previous,
}) => {
  return (
    <Flex direction="column">
      <Title mb="xl" order={1}>
        {title}
      </Title>
      {children}
      <Flex mt="xl" gap="xl">
        {previous ? (
          <ChangeExercise path={previous} variant="previous" />
        ) : (
          <Box flex={1} />
        )}
        {next ? (
          <ChangeExercise path={next} variant="next" />
        ) : (
          <Box flex={1} />
        )}
      </Flex>
    </Flex>
  );
};

export default ExerciseLayout;
