import { Suspense, lazy } from "react";

// @ts-ignore
const Contact = lazy(() => import("marketing/contact"));

const ContactScene = () => {
  return (
    <Suspense fallback="loading">
      <Contact />
    </Suspense>
  );
};

export default ContactScene;
