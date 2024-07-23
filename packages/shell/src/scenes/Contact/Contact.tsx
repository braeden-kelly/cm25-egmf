import { Suspense, lazy } from "react";

import { Container, Skeleton, Text, Title, Flex, Button } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import type { ContactScene } from "shared/marketing";

// @ts-ignore
const Contact = lazy<ContactScene>(() => import("marketing/contact"));

const ContactScene: ContactScene = () => {
  return (
    <ErrorBoundary fallback={<ContactError />}>
      <Suspense fallback={<ContactSkeleton />}>
        <Contact />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ContactScene;

const ContactSkeleton = () => {
  return (
    <Container p="md">
      <Skeleton h={45} />
      <Skeleton mt="md" h={30} />
      <Skeleton mt="md" h={30} />
      <Skeleton mt="md" h={30} />
    </Container>
  );
};

const ContactError = () => {
  return (
    <Flex align="center" direction="column">
      <Title mb="md" c="red">
        Something Went Wrong!
      </Title>
      <Text>We could not load the contact page</Text>
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
