import type { FC } from "react";

export namespace Catalog {
  export type Search = FC;
  export type Filter = FC;
  export type List = FC;
  export type Item = FC;
}

// export interface CatalogItem {
//     id: number;
//     href: string;
//     imgSrc: string;
//     name: string;
//     price: number;
//     description: string;
//     category: string;
//     rating: {
//       rate: number;
//       count: number;
//     };
//   }

//   export interface AddToCartEvent {
//     item: {
//       id: number;
//       title: string;
//       price: number;
//       description: string;
//       image: string;
//     };
//   }

//   export interface FilterPriceEvent {
//     min: string;
//     max: string;
//   }
