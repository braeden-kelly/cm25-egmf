import type { FC } from "react";

import { useForm } from "@mantine/form";
import {
  TextInput,
  Box,
  Grid,
  Fieldset,
  Title,
  Select,
  Button,
} from "@mantine/core";

import states from "./states";

interface ShippingProps {
  onSubmit: (values: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }) => void;
}

const Shipping: FC<ShippingProps> = ({ onSubmit }) => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });

  return (
    <Fieldset variant="filled">
      <Title order={2}>Shipping</Title>
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        <Box mx="auto">
          <TextInput
            label="Name"
            placeholder="Name"
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <TextInput
            mt="md"
            label="Address"
            placeholder="Address"
            key={form.key("address")}
            {...form.getInputProps("address")}
          />
        </Box>
        <Grid>
          <Grid.Col span={{ xs: 12, sm: 4 }}>
            <TextInput
              mt="md"
              label="City"
              placeholder="City"
              key={form.key("city")}
              {...form.getInputProps("city")}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 4 }}>
            <Select
              mt="md"
              label="State"
              placeholder="State"
              data={states}
              key={form.key("state")}
              {...form.getInputProps("state")}
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 4 }}>
            <TextInput
              mt="md"
              label="Zip"
              placeholder="Zip"
              key={form.key("zip")}
              {...form.getInputProps("zip")}
            />
          </Grid.Col>
        </Grid>
        <Button mt="md" type="submit">
          Continue
        </Button>
      </form>
    </Fieldset>
  );
};

export default Shipping;
