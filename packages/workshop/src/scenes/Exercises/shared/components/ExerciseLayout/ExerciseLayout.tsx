import type { FC, ReactNode } from "react";

import { Title, Text, Flex, Card, Box } from "@mantine/core";

import { Link } from "react-router-dom";

interface ExerciseLayoutProps {
  children?: ReactNode;
  title: string;
  next?: string;
  previous?: string;
}

const GettingSetup: FC<ExerciseLayoutProps> = ({
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
          <ChangeExercise to={previous} title="Previous" />
        ) : (
          <Box flex={1} />
        )}
        {next ? <ChangeExercise to={next} title="Next" /> : <Box flex={1} />}
      </Flex>
    </Flex>
  );
};

interface ChangeExerciseProps {
  to: string;
  title: string;
}

const ChangeExercise: FC<ChangeExerciseProps> = ({ to, title }) => {
  return (
    <Card component={Link} to={to} withBorder flex={1}>
      <Text>{title}</Text>
    </Card>
  );
};

export default GettingSetup;
