import type { FC } from "react";
import { Card, Image, Text, Stack, Button, Tooltip } from "@mantine/core";
import { Link } from "react-router-dom";

export interface CatalogListItemProps {
  href: string;
  imgSrc: string;
  name: string;
  price: number;
  id: number;
  description: string;
}

const CatalogListItem: FC<CatalogListItemProps> = ({
  href,
  imgSrc,
  name,
  price,
  id,
  description,
}) => {
  return (
    <Card shadow="sm" p={0} h={350} w={250}>
      <Stack gap="sm">
        <Link to={href}>
          <Image
            src={imgSrc}
            alt={name}
            height={200}
            width={250}
            fit="scale-down"
          />
        </Link>
        <Stack gap="sm" px="md">
          <Tooltip label={name}>
            <Text
              size="lg"
              fw={700}
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </Text>
          </Tooltip>
          <Text size="lg" c="dark">
            ${price}
          </Text>
          <Button
            bg="black"
            onClick={() => {
              console.log("uhh");
              dispatchEvent(
                new CustomEvent("add-to-cart", {
                  detail: {
                    item: {
                      id,
                      title: name,
                      price,
                      description,
                      image: imgSrc,
                    },
                  },
                })
              );
            }}
          >
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
