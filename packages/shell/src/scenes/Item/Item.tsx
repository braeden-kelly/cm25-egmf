import { Suspense, lazy } from "react";

// @ts-ignore
const Item = lazy(() => import("catalog/item"));

const ItemScene = () => {
  return (
    <Suspense fallback="loading">
      <Item />
    </Suspense>
  );
};

export default ItemScene;
