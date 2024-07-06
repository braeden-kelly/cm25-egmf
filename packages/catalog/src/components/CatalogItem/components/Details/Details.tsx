import type { FC } from "react";
import { Text, Group, Button } from "@mantine/core";
import {
  IconStarFilled,
  IconStar,
  IconStarHalfFilled,
} from "@tabler/icons-react";

const Details: FC<{
  name: string;
  rating: { count: number; rate: number };
  description: string;
  price: number;
}> = ({ name, rating, description, price }) => {
  return (
    <>
      <Text size="xl" fw={700}>
        {name}
      </Text>
      <Group gap="xs">
        {[...Array(5)].map((_, index) => {
          if (rating.rate >= index + 1) {
            return <IconStarFilled key={index} />;
          }
          if (rating.rate >= index + 0.5) {
            return <IconStarHalfFilled key={index} />;
          }
          return <IconStar key={index} />;
        })}
        {rating.rate} ({rating.count} reviews)
      </Group>
      <Text size="md" c="dark">
        {description}
      </Text>
      <Group gap="lg">
        <Text size="xl" fw={700}>
          ${price}
        </Text>
        <Button bg="black">Add to Cart</Button>
      </Group>
    </>
  );
};

export default Details;
