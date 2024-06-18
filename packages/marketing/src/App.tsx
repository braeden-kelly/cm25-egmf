import { MantineProvider, createTheme } from "@mantine/core";

import Header from "./scenes/Header";
import Footer from "./scenes/Footer";

const theme = createTheme({});

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Footer />
    </MantineProvider>
  );
};

export default App;
