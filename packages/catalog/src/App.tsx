import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CatalogItem from "./scenes/CatalogItem";
import CatalogList from "./scenes/CatalogList";
import Filter from "./scenes/Filter";

const App = () => {
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>
        <BrowserRouter>
          <Link to="/filter">Filter</Link>
          <Link to="/catalog-list">Catalog List</Link>
          <Link to="/catalog-item">Catalog Item</Link>
          <Routes>
            <Route path="/" element={<Filter />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/catalog-list" element={<CatalogList />} />
            <Route path="/catalog-item" element={<CatalogItem />} />
          </Routes>
        </BrowserRouter>
      </MantineEmotionProvider>
    </MantineProvider>
  );
};

export default App;
