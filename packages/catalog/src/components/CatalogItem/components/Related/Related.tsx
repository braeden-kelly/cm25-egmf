import type { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Group,
  Text,
  Card,
  Stack,
  Tooltip,
  Image,
  Skeleton,
  Flex,
} from "@mantine/core";
import { fetchRelated } from "../../../../api";

const Related: FC<{ category: string }> = ({ category }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["related", category],
    queryFn: () => fetchRelated(category),
    enabled: !!category,
  });

  if (isLoading) {
    return (
      <Stack>
        <Text size="lg" fw={700}>
          Related Products
        </Text>
        <Group gap="md">
          {[...Array(3)].map((_, index) => (
            <Card key={index} shadow="sm" p={0} h={200} w={200}>
              <Stack gap="sm">
                <Skeleton h={125} w={200} />
                <Stack gap="sm" px="md">
                  <Skeleton h={20} w="80%" />
                  <Skeleton h={30} w="100%" />
                  <Skeleton h={20} w="50%" />
                </Stack>
              </Stack>
            </Card>
          ))}
        </Group>
      </Stack>
    );
  }

  if (isError || !data) {
    return (
      <Flex p="md">
        <Text c="red" fw="bold">
          Error fetching related products.
        </Text>
      </Flex>
    );
  }

  return (
    <Stack>
      <Text size="lg" fw={700}>
        Related Products
      </Text>
      <Group gap="md">
        {data?.map((product) => (
          <Card shadow="sm" p={0} h={250} w={200}>
            <Stack gap="sm">
              <Image
                src={product.imgSrc}
                alt={product.name}
                height={100}
                width={125}
                fit="scale-down"
              />
              <Stack gap="sm" px="md">
                <Tooltip label={product.name}>
                  <Text
                    size="md"
                    fw={700}
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.name}
                  </Text>
                </Tooltip>
                <Text
                  size="md"
                  c="dark"
                  sx={{
                    // ellipsis after 2 lines
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 2,
                    lineClamp: 2,
                  }}
                >
                  {product.description}
                </Text>
                <Text size="md">${product.price}</Text>
              </Stack>
            </Stack>
          </Card>
        ))}
      </Group>
    </Stack>
  );
};

export default Related;
