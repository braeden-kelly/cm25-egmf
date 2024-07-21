import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "src/api";

type FilterPriceEvent = { min: string; max: string };

export const useCatalogList = () => {
  const { category } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: category ? ["products", "category", category] : ["products"],
    queryFn: fetchProducts,
  });
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  useEffect(() => {
    function handlePriceFilterChange(ev: CustomEvent<FilterPriceEvent>) {
      setMinPrice(ev.detail.min);
      setMaxPrice(ev.detail.max);
    }

    document.addEventListener("catalog-filter-price", handlePriceFilterChange);

    return () => {
      document.removeEventListener(
        "catalog-filter-price",
        handlePriceFilterChange
      );
    };
  }, []);

  const filteredData = data?.filter((item) => {
    return (
      (!+minPrice || item.price >= +minPrice) &&
      (!+maxPrice || item.price <= +maxPrice)
    );
  });

  return { catalogList: filteredData, isLoading, isError };
};
