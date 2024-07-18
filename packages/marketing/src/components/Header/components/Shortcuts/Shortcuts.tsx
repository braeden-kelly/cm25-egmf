import { Suspense, lazy, type FC } from "react";
import { Button, Group, Skeleton } from "@mantine/core";

// @ts-ignore
const Cart = lazy(() => import("order/cart"));

export interface Props {
  onCartClick: () => void;
}

const Shortcuts: FC<Props> = ({ onCartClick }) => {
  return (
    <Group>
      <Suspense fallback={<Skeleton width={50} height={50} radius="md" />}>
        <Cart />
      </Suspense>
    </Group>
  );
};

export default Shortcuts;
