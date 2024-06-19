import { useState, type FC } from "react";
import { Text, Stack } from "@mantine/core";
import { Checkboxes, Price } from "./components";

const Filters: FC = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [colors, setColors] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;

    setColors((prevColors) => {
      return checked
        ? [...prevColors, name]
        : prevColors.filter((item) => item !== name);
    });
  };

  const onBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;

    setBrands((prevBrands) => {
      return checked
        ? [...prevBrands, name]
        : prevBrands.filter((item) => item !== name);
    });
  };

  return (
    <Stack gap="md">
      <Text size="xl" fw={700}>
        Filters
      </Text>
      <Price min={min} max={max} setMin={setMin} setMax={setMax} />
      <Checkboxes
        title="Color"
        options={["Black", "White", "Blue", "Red"]}
        checked={colors}
        onChange={onColorChange}
      />
      <Checkboxes
        title="Brand"
        options={["Nike", "Adidas", "Apple", "Samsung"]}
        checked={brands}
        onChange={onBrandChange}
      />
    </Stack>
  );
};

export default Filters;
