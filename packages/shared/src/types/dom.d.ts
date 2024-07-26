// import type { AddToCartEvent, FilterPriceEvent } from './shared/catalog';

// interface CustomEventMap {
//   "catalog-filter-price": CustomEvent<FilterPriceEvent>;
//   "add-to-cart": CustomEvent<AddToCartEvent>;
// }

// declare global {
//   interface Document {
//     addEventListener<K extends keyof CustomEventMap>(
//       type: K,
//       listener: (this: Document, ev: CustomEventMap[K]) => void
//     ): void;
//     removeEventListener<K extends keyof CustomEventMap>(
//       type: K,
//       listener: (this: Document, ev: CustomEventMap[K]) => void
//     ): void;
//     dispatchEvent<K extends keyof CustomEventMap>(ev: CustomEventMap[K]): void;
//   }
// }
