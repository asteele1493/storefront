import { useRouteError } from "react-router-dom";
import React from "react";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <main>
      <h2>Sorry, we can not do that!</h2>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </main>
  );
}