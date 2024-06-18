import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CatalogItem from "./scenes/CatalogItem";
import CatalogList from "./scenes/CatalogList";
import Filter from "./scenes/Filter";
import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({});

const App = () => {
  return (
    <MantineProvider theme={theme}>
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
    </MantineProvider>
  );
};

export default App;
