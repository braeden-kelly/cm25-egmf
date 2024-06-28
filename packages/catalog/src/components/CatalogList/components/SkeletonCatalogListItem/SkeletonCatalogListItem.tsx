import { Card, Skeleton } from "@mantine/core";

const SkeletonCard = () => (
  <Card shadow="sm" p={0} h={350} w={250}>
    <Skeleton height={200} />
    <Skeleton height={30} m="sm" mb="sm" w={225} />
    <Skeleton height={30} ml="sm" width={100} />
    <Skeleton height={36} m="auto" mt="xs" width={230} />
  </Card>
);

export default SkeletonCard;
