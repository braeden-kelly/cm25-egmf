import { Grid } from "@mantine/core";
import { Outlet } from "react-router-dom";

import ExerciseList from "./components/ExerciseList";

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
