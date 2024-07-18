import { useLocalStorage } from "@mantine/hooks";
import { FC, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";

// @ts-ignore
const Login = lazy(() => import("profile/login"));

const LoginScene: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage({
    key: "logged-in",
    defaultValue: false,
  });

  const navigate = useNavigate();

  return (
    <Suspense fallback="loading">
      <Login
        onLoginSuccess={() => {
          console.log("hi");
          setIsLoggedIn(true);
          navigate("/shop");
        }}
      />
    </Suspense>
  );
};

export default LoginScene;
