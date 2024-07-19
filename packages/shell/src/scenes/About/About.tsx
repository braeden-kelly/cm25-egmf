import { Suspense, lazy } from "react";

// @ts-ignore
const About = lazy(() => import("marketing/about"));

const AboutScene = () => {
  return (
    <Suspense fallback="loading">
      <About />
    </Suspense>
  );
};

export default AboutScene;

