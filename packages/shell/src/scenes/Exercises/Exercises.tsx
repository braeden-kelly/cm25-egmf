import { Suspense, lazy } from "react";

// @ts-ignore
const Exercises = lazy(() => import("workshop/exercises"));

const ExercisesScene = () => {
  return (
    <Suspense fallback="loading">
      <Exercises />
    </Suspense>
  );
};

export default ExercisesScene;
