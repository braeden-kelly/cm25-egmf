import { Timeline } from "@mantine/core";
import { FC } from "react";

import ExerciseListItem from "./components/ExerciseListItem";
import { useExercises } from "../hooks/useExercises";

const ExerciseList: FC = () => {
  const { exercises, active } = useExercises();

  return (
    <Timeline active={active} bulletSize={35} lineWidth={2}>
      {exercises.map((exercise, position) => {
        return (
          <ExerciseListItem
            key={exercise.to + position}
            active={active}
            position={position}
            {...exercise}
          />
        );
      })}
    </Timeline>
  );
};

export default ExerciseList;
