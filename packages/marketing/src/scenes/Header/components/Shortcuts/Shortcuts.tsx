import { Suspense, lazy, type FC } from "react";
import { Button, Flex, Group, Skeleton, Tooltip } from "@mantine/core";
import { IconAlertTriangle, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import type { CartScene } from "shared/order";

// @ts-ignore
const Cart = lazy<CartScene>(() => import("order/cart"));

const Shortcuts: CartScene = () => {
  return (
    <Group>
      <Button
        component={Link}
        to="/account"
        c="white"
        bg="dark"
        sx={{ padding: 0, aspectRatio: 1, borderRadius: "50%" }}
      >
        <IconUser />
      </Button>
      <ErrorBoundary fallback={<CartError />}>
        <Suspense fallback={<Skeleton width={50} height={50} radius="md" />}>
          <Cart checkoutUrl="/order" />
        </Suspense>
      </ErrorBoundary>
    </Group>
  );
};

export default Shortcuts;

const CartError = () => {
  return (
    <Flex justify="center" align="center">
      <Tooltip label="Our cart is having some issues">
        <IconAlertTriangle color="yellow" size={18} width={30} height={30} />
      </Tooltip>
    </Flex>
  );
};
