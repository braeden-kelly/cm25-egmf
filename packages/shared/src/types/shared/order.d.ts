import type { FC } from 'react';

export interface CartSceneProps {
  checkoutUrl?: string;
}

export type CartScene = FC<CartSceneProps>;

export interface CheckoutSceneProps {
  id?: number;
  homePath?: string;
}

export type CheckoutScene = FC<CheckoutSceneProps>;