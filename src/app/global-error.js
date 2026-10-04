"use client";

import { useEffect } from "react";
import NextError from "next/error";
import posthog from "posthog-js";

export default function GlobalError({ error }) {
  useEffect(() => {
    posthog.captureException(error);
  }, [error]);

  return (
    <html lang="en-SG">
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
