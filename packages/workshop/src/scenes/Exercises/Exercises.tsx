import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

import GettingSetup from "./components/GettingSetup";
import ConfiguringModuleFederation from "./components/ConfiguringModuleFederation";

const Workshop = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route path="set-up" element={<GettingSetup />} />
        <Route path="exercise-1" element={<ConfiguringModuleFederation />} />
      </Route>
    </Routes>
  );
};

export default Workshop;
