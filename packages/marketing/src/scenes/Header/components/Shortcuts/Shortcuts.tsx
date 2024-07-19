import { Suspense, lazy, type FC } from "react";
import { Button, Group, Skeleton } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";

// @ts-ignore
const Cart = lazy(() => import("order/cart"));

const Shortcuts: FC = () => {
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
      <Suspense fallback={<Skeleton width={50} height={50} radius="md" />}>
        <Cart checkoutUrl="/order/shipping" />
      </Suspense>
    </Group>
  );
};

export default Shortcuts;
