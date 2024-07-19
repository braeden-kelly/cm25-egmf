import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  init,
  browserTracingIntegration,
  replayIntegration,
} from "@sentry/react";

init({
  dsn: process.env.SENTRY_PROFILE_DSN,
  integrations: [browserTracingIntegration(), replayIntegration()],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost"],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
