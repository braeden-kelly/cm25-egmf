import { readLocalStorageValue } from "@mantine/hooks";
import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import HeaderSkeleton from "./components/HeaderSkeleton";
import FooterSkeleton from "./components/FooterSkeleton";
import { AppShell, Container, Flex } from "@mantine/core";

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
    <Flex direction="column">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      <Flex w="100%" component="main" justify="center" align="center">
        <Container fluid w={{ sm: "sm", md: 800, lg: 1330, xl: 1400 }}>
          <Outlet />
        </Container>
      </Flex>
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </Flex>
  );
};

export default Layout;
