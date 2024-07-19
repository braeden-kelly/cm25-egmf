import { Suspense, lazy } from "react";

// @ts-ignore
const Welcome = lazy(() => import("workshop/welcome"));

const WelcomeScene = () => {
  return (
    <Suspense fallback="loading">
      <Welcome />
    </Suspense>
  );
};

export default WelcomeScene;
