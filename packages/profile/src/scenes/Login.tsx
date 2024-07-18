import {
  forwardRef,
  ForwardRefExoticComponent,
  MutableRefObject,
  ReactElement,
  type FC,
  type ForwardRefRenderFunction,
  type Ref,
} from "react";
import { Form, Navigate } from "react-router-dom";
import "../Login.css";
import backgroundImage from "../../assets/pexels-gustavo-fring-6050428.jpg";
import { Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import { PasswordInput, Stack, TextInput } from "@mantine/core";

export interface Props {
  onLoginSuccess: (args: any) => void;
}

type HTMLContainerTypesDict = Pick<HTMLElementTagNameMap, "div" | "section">;

const Login = ({ onLoginSuccess }: Props): ReactElement => {
  return (
    <Container className="login-page">
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="background-screen" />

      <Flex
        direction="column"
        wrap="nowrap"
        align="center"
        justify="center"
        className="login-centered"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLoginSuccess(null);
          }}
        >
          <Stack>
            <Heading as="h3">Our treasures, your style</Heading>
            <Text>Shop our exclusive collections now</Text>
            <TextInput placeholder="User name" />
            <PasswordInput placeholder="Password" />
            <Button type="submit">Login</Button>
          </Stack>
        </form>
      </Flex>
    </Container>
  );
};

export default Login;
