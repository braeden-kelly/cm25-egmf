import type { FC } from "react";

import { Anchor, Code, Grid, Image, List, Text, Title } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";

import ExerciseLayout from "../../shared/components/ExerciseLayout";

import shipping from "./assets/shipping.png";
import payment from "./assets/payment.png";

const readLogin = `import { readLocalStorageValue } from "@mantine/hooks";

// ...

const isLoggedIn = readLocalStorageValue<boolean>({ key: "logged-in" });`;

const setLogin = `const [, setIsLoggedIn] = useLocalStorage({
    key: "logged-in",
    defaultValue: false,
  });

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
}`;

const CheckoutFlow: FC = () => {
  return (
    <ExerciseLayout
      title="Checkout Flow"
      previous="../exercise-5"
      next="../exercise-7"
    >
      <Text>
        We have a catalog but no way to purchase any of our items, so it's high
        time we addressed that. The application needs two parts.
      </Text>
      <List py="lg">
        <List.Item>User authentication</List.Item>
        <List.Item>The checkout flow</List.Item>
      </List>
      <Text>
        You may continue from your work on the previous exercise, or check out a
        clean branch using the command below.
      </Text>
      <CodeHighlight my="lg" code="soln/setting-up-routes" />
      <Title py="xl" order={2}>
        User Authentication
      </Title>
      <Text>
        Users should only be able to view the shop when authenticated. To
        achieve this, we must implement an authentication check before allowing
        access to the shop. Users who are not authenticated should be redirected
        to the login page.
      </Text>
      <Title my="md" order={3}>
        Part One
      </Title>
      <Text>
        Add the following code to the <Code>Layout</Code> in the shell
        application to check if a user is authenticated.
      </Text>
      <CodeHighlight my="lg" code={readLogin} />
      <Text>
        If the user is authenticated they can continue onto the shop, otherwise
        they should be redirected to the <Code>/login</Code> route.
      </Text>
      <Title order={3} py="md">
        Part Two
      </Title>
      <Text>
        The login micro-frontend (MFE) should be loaded into the{" "}
        <Code>Login</Code> scene in the shell application (
        <Code>src/scenes/Login</Code>) and be rendered at the{" "}
        <Code>/login</Code> route.
      </Text>
      <Text pt="md">
        To facilitate the login process, the login MFE (
        <Code>profile/login</Code>) accepts an <Code>onLoginSuccess</Code> prop.
        In the <Code>Login</Code> scene (the component that loads the login
        MFE), you can add the following code to handle the authentication
        portion of the requirements. However, you will need to add the
        redirection logic; here's a{" "}
        <Anchor href="https://reactrouter.com/en/main/hooks/use-navigate">
          hint.
        </Anchor>
      </Text>

      <CodeHighlight my="lg" code={setLogin} />
      <Text>
        To verifies this works, you can sign in using the login page and sign
        out using the account page (Clicking the user icon in the header). You
        can also modify the value in local storage, if you're one who likes
        taking advantage of the implementation details.
      </Text>

      <Title py="xl" order={2}>
        The Checkout Flow
      </Title>
      <Text>
        We need to implement a checkout flow to enable users to purchase items
        from the catalog. This will involve consuming and updating the checkout
        MFE (<Code>profile/checkout</Code>). The checkout flow can be described
        as follows.
      </Text>
      <List py="lg" type="ordered">
        <List.Item>
          The user visits/navigates to <Code>/order</Code>, where they are shown
          their order summary and a form to input their shipping information.
        </List.Item>
        <List.Item>
          After entering their shipping information and pressing “continue”, the
          user is moved on to <Code>order/checkout</Code> where they are still
          able to view their order summary but the form is now a payment form.
        </List.Item>
      </List>
      <Grid my="md">
        <Grid.Col span={{ sm: 12, md: 6 }}>
          <Image src={shipping} />
        </Grid.Col>
        <Grid.Col span={{ sm: 12, md: 6 }}>
          <Image src={payment} />
        </Grid.Col>
      </Grid>
      <Title order={3} py="md">
        Part Three
      </Title>
      <Text>
        Inside the checkout scene, a lot of the infrastructure is already in
        place. To achieve this flow, you'll need to:
      </Text>
      <List py="lg" type="ordered">
        <List.Item>
          Update the shell application to load and defer the <Code>/order</Code>{" "}
          route to the
          <Code>order/checkout</Code> MFE.
          <List>
            <List.Item>
              The MFE can be loaded into the <Code>Checkout</Code> scene and the
              route to the <Code>App.tsx</Code> file in the shell
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          Update the <Code>Checkout</Code> component in{" "}
          <Code>checkout/src/scenes/Checkout/Checkout.tsx</Code> file to handle
          the layout and subroutes.
        </List.Item>
        <List.Item>
          Update the <Code>Layout</Code> component in
          <Code>
            checkout/src/scenes/Checkout/components/Layout/Layout.tsx
          </Code>{" "}
          to render the proper view for the app.
        </List.Item>
      </List>
    </ExerciseLayout>
  );
};

export default CheckoutFlow;
