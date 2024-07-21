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

      <Timeline.Item
        title="Pull request"
        bullet={<IconGitPullRequest size={12} />}
        lineVariant="dashed"
      >
        <Text c="dimmed" size="sm">
          You&apos;ve submitted a pull request
          <Text variant="link" component="span" inherit>
            Fix incorrect notification message (#187)
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          34 minutes ago
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            Robert Gluesticker
          </Text>{" "}
          left a code review on your pull request
        </Text>
        <Text size="xs" mt={4}>
          12 minutes ago
        </Text>
      </Timeline.Item>
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
