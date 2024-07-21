import { Anchor, Grid, ScrollArea } from "@mantine/core";

const Layout = () => {
  return (
    <Grid w="100%" px="lg">
      <Grid.Col span={3}>
        <ExerciseList />
      </Grid.Col>
      <Grid.Col span={9}>
        <Outlet />
      </Grid.Col>
    </Grid>
  );
};

export default Layout;

import { Timeline, Text } from "@mantine/core";
import {
  IconGitPullRequest,
  IconStretching,
  IconAdjustmentsAlt,
  IconMessageDots,
} from "@tabler/icons-react";
import { FC, ReactNode } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const exerciseMapping: Record<string, number> = {
  "set-up": 0,
  "exercise-1": 1,
  "exercise-2": 2,
  "exercise-3": 3,
  "exercise-4": 4,
};

const getActive = (path: string): number => {
  const exercise = path.split("/").at(-1);

  if (!exercise) return 0;

  return exerciseMapping[exercise];
};

interface ExerciseData {
  to: string;
  title: string;
  subTitle: string;
  icon?: ReactNode;
}

const exercises: ExerciseData[] = [
  {
    title: "Getting Set Up",
    subTitle: "Repo links and setup instructions",
    to: "set-up",
    icon: <IconAdjustmentsAlt size={18} />,
  },
  {
    title: "Configuring Module Federation",
    subTitle: "Configure the Module Federation plugin for the shop",
    to: "exercise-1",
  },
  {
    title: "Sharing Common Modules",
    subTitle: "Let's dedupe some code and decrease the bundle sizes",
    to: "exercise-2",
  },
  {
    title: "Fault Tolerance",
    subTitle: "MFEs that go down shouldn't impact the rest of the app",
    to: "exercise-3",
  },
  {
    title: "Adding More Micro-Frontends",
    subTitle: "The app still needs some micro-frontends added to work",
    to: "exercise-4",
  },
];

const ExerciseList = () => {
  const location = useLocation();
  const active = getActive(location.pathname) ?? 0;

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

interface ExerciseListItemProps extends ExerciseData {
  active: number;
  position: number;
}

const ExerciseListItem: FC<ExerciseListItemProps> = ({
  active,
  to,
  position,
  title,
  subTitle,
  icon: _icon,
}) => {
  const color = position === 0 ? "white" : active < position ? "dark" : "white";
  const icon = _icon || <IconStretching size={18} />;

  return (
    <Timeline.Item
      __active={position <= active}
      __lineActive={position < active}
      lineVariant={position < active ? "solid" : "dashed"}
      bullet={
        <Anchor component={Link} to={to} c={color}>
          {icon}
        </Anchor>
      }
      title={
        <Text component={Link} to={to} fw={500} sx={{ lineHeight: "16px" }}>
          {title}
        </Text>
      }
    >
      <Text component={Link} to={to} c="dimmed" size="sm">
        {subTitle}
      </Text>
    </Timeline.Item>
  );
};
