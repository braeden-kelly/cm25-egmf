import type { FC } from "react";
import { Image, Flex, Stack } from "@mantine/core";

const Images: FC<{ imgSrc: string; name: string }> = ({ imgSrc, name }) => {
  return (
    <Stack align="center">
      <Image
        src={imgSrc}
        alt={name}
        h={500}
        w={300}
        mah={500}
        maw={300}
        fit="scale-down"
      />
      <Flex gap="xl" justify="space-around" mt="lg">
        {[...Array(4)].map((_, index) => (
          <Image
            key={index}
            src={imgSrc}
            alt={name}
            height={100}
            width={75}
            fit="scale-down"
            m="md"
          />
        ))}
      </Flex>
    </Stack>
  );
};

export default Images;
