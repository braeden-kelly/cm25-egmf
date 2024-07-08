import type { CatalogItem } from "./interface";

export async function fetchRelated(category: string): Promise<CatalogItem[]> {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}?limit=3`
    );

    if (!response.ok) {
      throw new Error(response.statusText || "Unknown error occurred");
    }

    const data = await response.json();
    const mappedData: CatalogItem[] = data.map((item: any) => ({
      href: item.image,
      imgSrc: item.image,
      name: item.title,
      price: item.price,
      description: item.description,
      rating: item.rating,
    }));

    return mappedData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching category ${category}: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
}
