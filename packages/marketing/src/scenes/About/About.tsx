import type { FC } from "react";

import { Heading, Strong, Text } from "@radix-ui/themes";
import { Container, List, ListItem, Stack } from "@mantine/core";

const About: FC = () => {
  return (
    <Container sx={{ maxWidth: "760px", align: "center", padding: "20px" }}>
      <Stack>
        <Heading>About Acme Store</Heading>

        <Text>
          We are a department store specializing in the finest selection of
          affordable menswear and women's clothing, jewelry, and electronics for
          the modern sophisticate.
        </Text>

        <Heading as="h3">Mission and Vision:</Heading>
        <Text>
          Mission: To provide our customers with high-quality products at
          affordable prices, while delivering exceptional customer service.
        </Text>

        <Text>
          Vision: To become the go-to destination for fashion-forward
          individuals seeking stylish and affordable products.
        </Text>

        <Heading as="h3">Core Values:</Heading>

        <List>
          <ListItem>
            <Strong>Quality: </Strong>
            We are committed to offering only the best products to our
            customers.
          </ListItem>
          <ListItem>
            <Strong>Affordability: </Strong>
            We believe that everyone deserves to look and feel their best
            without breaking the bank.
          </ListItem>

          <ListItem>
            <Strong>Customer Service: </Strong>
            We strive to provide a personalized and enjoyable shopping
            experience for every customer.
          </ListItem>
        </List>
        <Heading as="h3">Team:</Heading>
        <Text>
          Our team consists of dedicated professionals who are passionate about
          fashion and customer satisfaction. From our knowledgeable sales
          associates to our friendly customer service representatives, we are
          here to help you find the perfect items for your wardrobe.
        </Text>
      </Stack>
    </Container>
  );
};

export default About;
