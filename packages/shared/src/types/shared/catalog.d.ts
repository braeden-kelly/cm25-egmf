import type { FC } from 'react';

export interface CatalogItem {
  id: number;
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

export interface AddToCartEvent {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  };
}

export interface FilterPriceEvent { 
  min: string;
  max: string;
}

export type CatalogListSceneProps = {};
export type CatalogListScene = FC<CatalogListSceneProps>;

export type CatalogItemSceneProps = {};
export type CatalogItemScene = FC<CatalogItemSceneProps>;

export type CatalogFilterSceneProps = {};
export type CatalogFilterScene = FC<CatalogFilterSceneProps>;

export type CatalogSearchSceneProps = {};
export type CatalogSearchScene = FC<CatalogSearchSceneProps>;
