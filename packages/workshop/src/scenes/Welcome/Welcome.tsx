import {
  Flex,
  Title,
  Text,
  Anchor,
  Container,
  List,
  Code,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Container>
      <Flex direction="column" gap="lg">
        <Title mb="lg" order={1}>
          Hello - Nice to meet you!
        </Title>
        <Text>
          This application is a tool to help developers learn about
          micro-frontends and is a part of a larger workshop called
          Enterprise-Grade Micro-Frontends. The slides for which you can find{" "}
          <Anchor href="/">here.</Anchor>
        </Text>

        <Text>
          If you are reading this without attending the workshop, that's
          awesome! The slides are built out with discussion in mind so they may
          be hard to follow. If you have anything you'd like to discuss you can
          find many developers able to answer your questions in{" "}
          <Anchor href="/">Bitovi's Discord</Anchor>.
        </Text>

        <Text>
          There are several different ways to create and compose micro-frontends
          - this application is an SPA that uses the following stack:
        </Text>
        <List>
          <List.Item>Nx</List.Item>
          <List.Item>Module Federation with RSBuild</List.Item>
          <List.Item>Mantine UI</List.Item>
          <List.Item>React Router</List.Item>
          <List.Item>Tanstack (react-query)</List.Item>
        </List>
        <Text>
          Over the course of this workshop we will be building out an ecom app!
          If you want to see the final result, click the <Code>To Shop</Code>{" "}
          button below. Otherwise, there are many exercises we will do together
          throughout the workshop, but first, we need to get you set up.
        </Text>
        <Flex align="center" justify="end" gap="xl">
          <Button variant="default" component={Link} to="/shop">
            To Shop!
          </Button>
          <Button component={Link} to="/workshop/setup">
            Let's Get Set Up!
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Welcome;
