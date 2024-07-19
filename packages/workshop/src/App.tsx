import { MantineProvider } from "@mantine/core";
import { MantineEmotionProvider, emotionTransform } from "@mantine/emotion";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Welcome from "./scenes/Welcome/Welcome";

import "@mantine/core/styles.css";

const App = () => {
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Welcome />} />
          </Routes>
        </BrowserRouter>
      </MantineEmotionProvider>
    </MantineProvider>
  );
};

export default App;
