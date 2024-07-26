import type { FC } from "react";

import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Container, Flex } from "@mantine/core";
import { readLocalStorageValue } from "@mantine/hooks";

import HeaderSkeleton from "./components/HeaderSkeleton";
import FooterSkeleton from "./components/FooterSkeleton";

const Header = lazy(() => import("marketing/header"));
const Footer = lazy(() => import("marketing/footer"));

const Layout: FC = () => {
  const isLoggedIn = readLocalStorageValue<boolean>({ key: "logged-in" });

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <Flex sx={{ flex: 1 }} direction="column" justify="space-between">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      <Flex w="100%" sx={{ flex: 1 }} py="xl" component="main">
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
