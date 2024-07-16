import { useEffect, useRef, useState } from "react";
import Account from "./scenes/Account";
import Login from "./scenes/Login";
import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";

const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [stateRef, setStateRef] = useState<HTMLDivElement | null>(ref.current);
  useEffect(() => {
    setStateRef(ref.current);
  }, [ref.current]);
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>
        <div>
          <Account />
          <div ref={ref}>
            <Login parentNode={stateRef} onLoginSuccess={() => {}} isLoggedIn={false}/>
          </div>
        </div>
      </MantineEmotionProvider>
    </MantineProvider>
  );
};

export default App;
