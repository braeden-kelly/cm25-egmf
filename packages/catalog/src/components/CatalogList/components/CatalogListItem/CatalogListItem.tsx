import type { FC } from "react";
import { Card, Image, Text, Stack, Button } from "@mantine/core";

export interface CatalogListItemProps {
  href: string;
  imgSrc: string;
  name: string;
  price: number;
}

const CatalogListItem: FC<CatalogListItemProps> = ({
  href,
  imgSrc,
  name,
  price,
}) => {
  return (
    <Card shadow="sm" p={0} h={350} w={250}>
      <Stack gap="sm">
        <a href={href}>
          <Image
            src={imgSrc}
            alt={name}
            height={200}
            width={250}
            fit="contain"
          />
        </a>
        <Stack gap="sm" px="md">
          <Text size="xl" fw={700}>
            {name}
          </Text>
          <Text size="lg" c="dark">
            ${price}
          </Text>
          <Button bg="black">
            <Text size="md" fw={700}>
              Add to cart
            </Text>
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CatalogListItem;
