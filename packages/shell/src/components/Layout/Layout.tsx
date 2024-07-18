import { Skeleton } from "@mantine/core";
import { readLocalStorageValue } from "@mantine/hooks";
import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import HeaderSkeleton from "./components/HeaderSkeleton";
import FooterSkeleton from "./components/FooterSkeleton";

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
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      <Outlet />
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
