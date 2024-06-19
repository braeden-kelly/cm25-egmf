import type { FC } from "react";
import { Group } from "@mantine/core";
import {
  IconCircleFilled,
  IconHeart,
  IconShoppingCart,
} from "@tabler/icons-react";

const Shortcuts: FC = () => {
  return (
    <Group>
      <IconShoppingCart color="white" />
      <IconHeart color="white" />
      <IconCircleFilled color="white" />
    </Group>
  );
};

export default Shortcuts;
