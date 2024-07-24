import type { FC } from "react";
import ExerciseLayout from "../../shared/components/ExerciseLayout";
import {
  Accordion,
  Alert,
  Code,
  List,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

const types = `interface BaseCart {
  id: number;
  userId: number;
}

type Product = CatalogItem & { quantity: number }

export interface UserCart extends BaseCart {
  tax: number;
  subTotal: number;
  total: number;
  products: Array<Product>;
}`;

const localStorageHook = `const [cart, setCart] = useLocalStorage<UserCart>({
    key: cartKey,
    defaultValue: newCart,
  });`;

const AddingItemsToCart: FC = () => {
  return (
    <ExerciseLayout
      title="Adding Items to Cart"
      previous="../exercise-6"
      next="../exercise-8"
    >
      <Text>
        With all of our routes set up, it's time to get our MFEs communicating.
      </Text>
      <Text pt="md">
        Adding a catalog item to the cart is a cross-team effort. The order
        team, in charge of the cart, needs to create the cart state, the event
        type they are expecting, and create listeners to respond to any incoming
        events. The catalog team needs to dispatch those events.
      </Text>
      <Text pt="md">
        The team has already decided on the cart state and added the cart and
        product types to the repository. They look as follows.
      </Text>
      <Code my="lg" block>
        {types}
      </Code>
      <Text>
        The <Code>UserCart</Code> type can be imported using:
      </Text>
      <Code my="lg" block>
        {`import type { CatalogItem, UserCart } from "@services/cart";`}
      </Code>
      <Title order={2} py="xl">
        Part 1 - Cart State
      </Title>
      <Text>
        Let's start by adding the cart state (of type <Code>UserCart</Code>); we
        want to store it in local storage like the login state. To do this, the
        cart service has a couple of helpers, the <Code>cartKey</Code> and the{" "}
        <Code>newCart</Code>, which serve as the local storage key and the
        default value, respectively.
      </Text>
      <Code
        my="lg"
        block
      >{`import { cartKey, getTotals, newCart } from "@services/cart";`}</Code>
      <Accordion>
        <Accordion.Item value="hint">
          <Accordion.Control>
            Give it a try using the <Code>useLocalStorage</Code> hook, if you're
            getting stuck expand this for the code
          </Accordion.Control>
          <Accordion.Panel>
            <Code my="lg" block>
              {localStorageHook}
            </Code>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Title order={2} py="xl">
        Part 2 - Event Listening
      </Title>
      <Text>
        Next, create a custom event listener called <Code>add-to-cart</Code>{" "}
        that listens for an event with the following shape (below) and updates
        the cart state.
      </Text>
      <Code my="lg" block>
        {`type AddToCartEvent = { item: CatalogItem };`}
      </Code>
      <Text>The updating cart logic should work as follows:</Text>
      <List py="lg">
        <List.Item>
          The item should be added if not in the cart's product array.
        </List.Item>
        <List.Item>
          If the item is already in the cart's product array, its quantity
          should be increased.
        </List.Item>
      </List>
      <Text>
        You can use some helper functions to help implement the add-to-cart
        logic and create the new product array.
      </Text>
      <Code
        py="lg"
        block
      >{`import { addToProducts, increaseQuantity, itemInCart } from "./utilities";`}</Code>
      <Table my="xl" withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Function</Table.Th>
            <Table.Th>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>
              <Code>itemInCart</Code>
            </Table.Td>
            <Table.Td>
              Returns <Code>true</Code> if the given product exists within the
              passed in cart
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Code>increaseQuantity</Code>
            </Table.Td>
            <Table.Td>
              Returns a new <Code>{`Product[]`}</Code> with the quantity of the
              passed in item id increased
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Code>addToProducts</Code>
            </Table.Td>
            <Table.Td>
              Returns a new <Code>{`Product[]`}</Code> with the product passed
              in included
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
      <Text>
        To complete the process, update the cart order total using getTotals
        from the cart service.
      </Text>
      <Code py="lg">{`import { getTotals } from '@services/cart'`}</Code>
      <Table my="xl" withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Function</Table.Th>
            <Table.Th>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>
              <Code>getTotals</Code>
            </Table.Td>
            <Table.Td>
              Returns an object containing the <Code>tax</Code>,{" "}
              <Code>subtotal</Code>, and total for the <Code>cart</Code>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
      <Title order={2} py="xl">
        Part 3 - Dispatching
      </Title>
      <Text>
        Next, wire up the “Add to Cart” button in the catalog list and catalog
        item MFEs. Once complete, you should be able to add items to the cart
        and see the price being reflected in the header. If you hover over the
        cart icon, you should see the items you've added.
      </Text>
      <Alert
        title="To Make it Work With Checkout"
        icon={<IconInfoCircle />}
        my="xl"
      >
        To link this cart together with the checkout process, remove the
        hard-coded id in the <Code>CartSummary</Code> component in{" "}
        <Code>order/src/shared/components/CartSummary</Code> component
      </Alert>
    </ExerciseLayout>
  );
};

export default AddingItemsToCart;
