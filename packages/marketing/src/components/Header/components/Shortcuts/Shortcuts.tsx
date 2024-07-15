import type { FC } from "react";
import { Button, Group } from "@mantine/core";
import {
  IconCircleFilled,
  IconHeart,
  IconShoppingCart,
} from "@tabler/icons-react";

export interface Props {
  onCartClick: () => void;
}

const Shortcuts: FC<Props> = ({ onCartClick }) => {
  return (
    <Group>
      <Button onClick={onCartClick}><IconShoppingCart color="white" /></Button>
      <IconHeart color="white" />
      <IconCircleFilled color="white" />
    </Group>
  );
};

export default Shortcuts;
