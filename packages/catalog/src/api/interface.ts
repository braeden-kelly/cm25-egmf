export interface CatalogItem {
  href: string;
  imgSrc: string;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}
