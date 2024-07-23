import { Suspense, lazy } from "react";
import { Flex, Skeleton, Text, Title, Button, Paper } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

import type { WelcomeScene } from "shared/workshop";

// @ts-ignore
const Welcome: WelcomeScene = lazy<WelcomeScene>(() => import("workshop/welcome"));

const WelcomeScene: WelcomeScene = () => {
  return (
    <ErrorBoundary fallback={<WelcomeError />}>
      <Suspense fallback={<WelcomeSkeleton />}>
        <Welcome />
      </Suspense>
    </ErrorBoundary>
  );
};

export default WelcomeScene;

const WelcomeSkeleton = () => {
  return (
    <Flex flex={1} align="center" justify="center">
      <Skeleton h={656} w="50%" />
    </Flex>
  );
};

const WelcomeError = () => {
  return (
    <Flex bg="blue" flex={1} align="center" justify="center" direction="column">
      <Paper h={656} w="50%">
        <Flex h="100%" direction="column" align="center" justify="center">
          <Title mb="md" c="red">
            Something Went Wrong!
          </Title>
          <Text>We could not load the page</Text>
        </Flex>
      </Paper>
    </Flex>
  );
};
