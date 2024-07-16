import { forwardRef, ForwardRefExoticComponent, MutableRefObject, ReactElement, type FC, type ForwardRefRenderFunction, type Ref } from "react";
import { Form, Navigate } from "react-router-dom";
import '../Login.css';
import backgroundImage from '../../assets/pexels-gustavo-fring-6050428.jpg';
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { PasswordInput, Stack, TextInput } from "@mantine/core";

export interface Props {
  onLoginSuccess: (args: any) => void;
  isLoggedIn: boolean;
  parentNode: HTMLContainerTypes | null
}

type HTMLContainerTypesDict = Pick<HTMLElementTagNameMap, 'div' | 'section'>
type HTMLContainerTypes = HTMLContainerTypesDict[keyof HTMLContainerTypesDict]

const Login = (({ onLoginSuccess, isLoggedIn, parentNode }: Props): ReactElement => {
  if(parentNode) {
    parentNode.className += ' login-page';
  }

  return (
    <>
      <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="background-screen" />
      
      <Flex direction="column" wrap="nowrap" align="center" justify="center" className="login-centered">
        <form action="javascript://" onSubmit={onLoginSuccess}>
          <Stack>
            <Heading as="h3">Our treasures, your style</Heading>
            <Text>Shop our exclusive collections now</Text>
            <TextInput placeholder="User name" />
            <PasswordInput placeholder="Password" />
            <Button type="submit" onClick={onLoginSuccess}>Login</Button>
          </Stack>
        </form>
      </Flex>
    </>
  );
});

export default Login;
