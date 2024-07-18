import type { FC } from "react";

import { Button } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

const Account: FC = () => {
  const [, setIsLoggedIn] = useLocalStorage<boolean>({ key: "logged-in" });
  const navigate = useNavigate();

  return (
    <div>
      Account Page{" "}
      <Button
        onClick={() => {
          setIsLoggedIn(false);
          navigate("/");
        }}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default Account;
