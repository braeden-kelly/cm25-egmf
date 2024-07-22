import { Suspense, lazy } from "react";
import { Skeleton, Text, Title, Flex, Button, Grid } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
// @ts-ignore
const Exercises = lazy(() => import("workshop/exercises"));

const ExercisesScene = () => {
  return (
    <ErrorBoundary fallback={<ExercisesError />}>
      <Suspense fallback={<ExercisesSkeleton />}>
        <Exercises />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ExercisesScene;

const ExercisesSkeleton = () => {
  return (
    <Grid w="100%" px="lg">
      <Grid.Col span={3}>
        <Skeleton h={700} />
      </Grid.Col>
      <Grid.Col span={9}>
        <Skeleton h={900} />
      </Grid.Col>
    </Grid>
  );
};

const ExercisesError = () => {
  return (
    <Flex align="center" direction="column">
      <Title mb="md" c="red">
        Something Went Wrong!
      </Title>
      <Text>We could not load the exercises page</Text>
      <Flex mt="xl" gap="xl">
        <Button component={Link} variant="default" to="/">
          Go Home
        </Button>
        <Button component={Link} to="/shop">
          Go to Shop
        </Button>
      </Flex>
    </Flex>
  );
};
