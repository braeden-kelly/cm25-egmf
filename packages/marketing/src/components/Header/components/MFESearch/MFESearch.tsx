import type { FC } from "react";
import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const styles = {
  SearchMFE: {
    TextInput: {
      input: {
        backgroundColor: "#1f2937",
        color: "white",
      },
    },
  },
};

const MFESearch: FC = () => {
  return (
    <TextInput
      placeholder="Search products..."
      size="md"
      leftSection={<IconSearch />}
      styles={styles.SearchMFE.TextInput}
    />
  );
};

export default MFESearch;
