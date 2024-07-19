import type { FC } from "react";

import { Button, Heading } from "@radix-ui/themes";
import { Anchor, Container, Image, Stack, Text } from "@mantine/core";

const Contact: FC = () => {
  return (
    <Container sx={{ maxWidth: "760px", align: "center", padding: "20px" }}>
    <Stack>
      <Heading as="h2">Contact Us</Heading>
      <Text>
        Acme Store is proudly brought to you by the friendly devs at
        {" "}
        <Anchor href="https://bitovi.com/" target="bitovi.com">
          <Image
            src="https://www.bitovi.com/hubfs/limbo-generated/imgs/logos/bitovi-logo-23.svg"
            sx={{ height: "14px", width: "auto", display: "inline" }}
          />
        </Anchor>.
      </Text>
      <Heading as="h3">
        Questions?
      </Heading>
      <Text>
        Send us email at
        {" "}
        <Anchor href="mailto:support@bitovi.com">support@bitovi.com</Anchor>
        {" "}
        with any questions or suggestions.
      </Text>
    </Stack>
    </Container>
  );
};

export default Contact;
