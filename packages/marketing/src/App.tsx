import { MantineProvider, createTheme } from "@mantine/core";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Header from "./scenes/Header";
import Footer from "./scenes/Footer";

const theme = createTheme({});

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Link to="/header">Header</Link>
        <Link to="/footer">Footer</Link>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
