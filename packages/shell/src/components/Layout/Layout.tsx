import { readLocalStorageValue } from "@mantine/hooks";
import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";

// @ts-ignore
const Header = lazy(() => import("marketing/header"));
// @ts-ignore
const Footer = lazy(() => import("marketing/footer"));

const Layout = () => {
  const isLoggedIn = readLocalStorageValue<boolean>({ key: "logged-in" });

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Suspense fallback="loading header">
        <Header />
      </Suspense>
      <Outlet />
      <Suspense fallback="loading footer">
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
