import type { FC } from "react";

import { Suspense, lazy } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { useNavigate, Link } from "react-router-dom";
import { Skeleton, Text, Title, Flex, Button } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import type { LoginScene } from "shared/profile";

// @ts-ignore
const Login = lazy<LoginScene>(() => import("profile/login"));

const LoginScene: LoginScene = () => {
  const [, setIsLoggedIn] = useLocalStorage({
    key: "logged-in",
    defaultValue: false,
  });

  const navigate = useNavigate();

  return (
    <ErrorBoundary fallback={<LoginError />}>
      <Suspense fallback={<LoginSkeleton />}>
        <Login
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            navigate("/shop");
          }}
        />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LoginScene;

const LoginSkeleton = () => {
  return (
    <Flex flex={1} align="center" justify="center">
      <Skeleton h={300} w={360} />
    </Flex>
  );
};

const LoginError = () => {
  return (
    <Flex align="center" direction="column">
      <Title mb="md" c="red">
        Something Went Wrong!
      </Title>
      <Text>We could not load the login page</Text>
      <Flex mt="xl" gap="xl">
        <Button component={Link} to="/">
          Go Home
        </Button>
      </Flex>
    </Flex>
  );
};
