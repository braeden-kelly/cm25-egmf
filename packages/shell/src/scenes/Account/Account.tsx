import { Suspense, lazy } from "react";

// @ts-ignore
const Account = lazy(() => import("profile/account"));

const AccountScene = () => {
  return (
    <Suspense fallback="loading">
      <Account />
    </Suspense>
  );
};

export default AccountScene;
