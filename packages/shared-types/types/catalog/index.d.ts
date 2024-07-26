declare module "catalog/search" {
  import type { FC } from "react";
  export default function Search(): ReturnType<FC>;
}

declare module "catalog/list" {
  import type { FC } from "react";
  export default function CatalogList(): ReturnType<FC>;
}

declare module "catalog/item" {
  import type { FC } from "react";
  export default function CatalogItem(): ReturnType<FC>;
}

declare module "catalog/filter" {
  import type { FC } from "react";
  export default function Filter(): ReturnType<FC>;
}

namespace Catalog {
  import type { FC } from "react";

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
