import type { FC } from "react";

import "../Login.css";
import backgroundImage from "../../assets/pexels-gustavo-fring-6050428.jpg";
import {
  Button,
  Container,
  Flex,
  Title,
  Text,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";

export interface Props {
  onLoginSuccess: () => void;
}

const Login: FC<Props> = ({ onLoginSuccess }) => {
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
            onLoginSuccess();
          }}
        >
          <Stack>
            <Title order={2}>Our treasures, your style</Title>
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
