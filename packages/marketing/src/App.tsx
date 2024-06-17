import Header from "./scenes/Header";
import Footer from "./scenes/Footer";
import { MantineProvider, createTheme } from "@mantine/core";

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
