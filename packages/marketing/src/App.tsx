import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Header from "./scenes/Header";
import Footer from "./scenes/Footer";

const App = () => {
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>
        <BrowserRouter>
          <Link to="/header">Header</Link>
          <Link to="/footer">Footer</Link>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/header" element={<Header />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </MantineEmotionProvider>
    </MantineProvider>
  );
};

export default App;
