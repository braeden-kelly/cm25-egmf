import type { FC } from "react";
import { Navigate } from "react-router-dom";

import { Button } from "@radix-ui/themes";

export interface Props {
  onLoginSuccess: (args: any) => void;
  isLoggedIn: boolean;
}

const Login: FC<Props> = ({ onLoginSuccess, isLoggedIn }) => {
  return (
    <>
{/*      {isLoggedIn && (
        <Navigate to="/" replace={false} />
      )}*/}
      <div>
        Login Page <Button onClick={onLoginSuccess}>Login</Button>
      </div>
    </>
  );
};

export default Login;
