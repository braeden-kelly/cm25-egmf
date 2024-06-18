import type { FC } from "react";
import { Text, Stack } from "@mantine/core";
import { Link } from "react-router-dom";

const categories = [
  ["/shop/clothing", "Clothing"],
  ["/shop/electronics", "Electronics"],
  ["/shop/home-garden", "Home & Garden"],
  ["/shop/beauty-personal-care", "Beauty & Personal Care"],
  ["/shop/sports-outdoors", "Sports & Outdoors"],
];

const Categories: FC = () => {
  return (
    <Stack gap="xs" align="flex-start">
      <Text size="xl" fw={700}>
        Categories
      </Text>
      {categories.map((category) => (
        <Link
          to={category[0]}
          key={category[0]}
          style={{ textDecoration: "none" }}
        >
          <Text key={category[0]} size="lg" c="dark">
            {category[1]}
          </Text>
        </Link>
      ))}
    </Stack>
  );
};

export default Categories;
