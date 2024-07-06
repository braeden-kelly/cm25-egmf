import type { CatalogItem } from "./interface";

export async function fetchProducts(): Promise<CatalogItem[]> {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(response.statusText || "Unknown error occurred");
    }

    const data = await response.json();
    const mappedData: CatalogItem[] = data.map((product: any) => ({
      href: product.image,
      imgSrc: product.image,
      name: product.title,
      price: product.price,
    }));

    return mappedData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching products: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
}
