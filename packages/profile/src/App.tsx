import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { BrowserRouter } from "react-router-dom";

import Account from "./scenes/Account";
import Login from "./scenes/Login";

import "@mantine/core/styles.css";

const App = () => {
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>
        <div>
          <Account />
          <div ref={ref}>
            <Login onLoginSuccess={() => {}} isLoggedIn={false}/>
          </div>
        </BrowserRouter>
      </MantineEmotionProvider>
    </MantineProvider>
  );
};

export default App;
