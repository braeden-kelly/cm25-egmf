import type { FC } from "react";
import {
  Container,
  Grid,
  Stack,
  Divider,
  Flex,
  Text,
  Skeleton,
} from "@mantine/core";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../../api";
import { Breadcrumbs, Details, Images, Related, Reviews } from "./components";

const CatalogItem: FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
    enabled: !!productId,
  });

  if (isLoading) {
    return (
      <Container size="90%">
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <Skeleton h={20} w="100%" />
              <Skeleton h={500} w="100%" />
              <Flex gap="xl" justify="space-around" mt="lg">
                {[...Array(4)].map((_, index) => (
                  <Skeleton key={index} h={50} w="100%" />
                ))}
              </Flex>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md" px="md">
              <Skeleton h={300} w="100%" />
              <Skeleton h={300} w="100%" />
              <Skeleton h={300} w="100%" />
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    );
  }

  if (isError || !data) {
    return (
      <Flex p="md">
        <Text c="red" fw="bold">
          Error fetching product.
        </Text>
      </Flex>
    );
  }

  return (
    <Container size="90%">
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="md">
            <Breadcrumbs name={data.name} />
            <Images {...data} />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="md" px="md">
            <Details {...data} />
            <Divider mt="lg" mb="lg" />
            <Related {...data} />
            <Divider mt="lg" mb="lg" />
            <Reviews {...data} />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default CatalogItem;
