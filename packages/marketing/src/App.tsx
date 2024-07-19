import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Header from "./scenes/Header";
import Footer from "./scenes/Footer";
import About from "./scenes/About";
import Contact from "./scenes/Contact";

const App = () => {
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>
        <BrowserRouter>
          <Link to="/header">Header</Link>
          <Link to="/footer">Footer</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Routes>
            <Route path="/" element={<Header onCartClick={() => {}} />} />
            <Route path="/header" element={<Header onCartClick={() => {}} />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </MantineEmotionProvider>
    </MantineProvider>
  );
};

export default App;
