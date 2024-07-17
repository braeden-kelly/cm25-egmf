import type { FC } from "react";
import type { UserCart } from "../../../../../services/cart";
import {
  Flex,
  Container,
  Divider,
  Title,
  Text,
  Box,
  Image,
} from "@mantine/core";

interface OrderDetailsProps {
  cart: UserCart;
}

const toCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    amount
  );

const OrderDetails: FC<OrderDetailsProps> = ({ cart }) => {
  return (
    <Container component="section">
      <Title order={2}>Order Summary</Title>
      <Container>
        {cart.products.map((product) => {
          return (
            <Flex
              h={85}
              key={product.id}
              mt="sm"
              justify="space-between"
              align="center"
            >
              <Flex align="center">
                <Image
                  radius="md"
                  mr="md"
                  sx={{ height: "50px", aspectRatio: 1, objectFit: "cover" }}
                  src={product.image}
                />
                <Box>
                  <Text>{product.title}</Text>
                  <Text>Quantity: {product.quantity}</Text>
                </Box>
              </Flex>
              <Text>{toCurrency(product.price)}</Text>
            </Flex>
          );
        })}
      </Container>

      <Divider />
      <Flex mt="sm" justify="space-between">
        <Text>Subtotal</Text>
        <Text>{toCurrency(cart.subTotal)}</Text>
      </Flex>
      <Flex mt="sm" justify="space-between">
        <Text>Taxes</Text>
        <Text>{toCurrency(cart.tax)}</Text>
      </Flex>
      <Flex mt="sm" justify="space-between">
        <Text>Total</Text>
        <Text fw={700}>{toCurrency(cart.total)}</Text>
      </Flex>
    </Container>
  );
};

export default OrderDetails;
