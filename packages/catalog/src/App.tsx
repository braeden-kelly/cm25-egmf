import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CatalogItem from "./scenes/CatalogItem";
import CatalogList from "./scenes/CatalogList";
import Filter from "./scenes/Filter";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider stylesTransform={emotionTransform}>
        <MantineEmotionProvider>
          <BrowserRouter>
            <Link to="/filter">Filter</Link>
            <Link to="/catalog-list">Catalog List</Link>
            <Link to="/catalog-item/1">Catalog Item</Link>
            <Routes>
              <Route path="/" element={<Filter />} />
              <Route path="/filter" element={<Filter />} />
              <Route path="/catalog-list" element={<CatalogList />} />
              <Route
                path="/catalog-item/:productId"
                element={<CatalogItem />}
              />
            </Routes>
          </BrowserRouter>
        </MantineEmotionProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
