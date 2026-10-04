import { BatchLogRecordProcessor, LoggerProvider } from "@opentelemetry/sdk-logs";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
const isPostHogLogCaptureConfigured = Boolean(projectToken && posthogHost);

const processors = isPostHogLogCaptureConfigured
  ? [
      new BatchLogRecordProcessor({
        exporter: new OTLPLogExporter({
          url: `${posthogHost.replace(/\/$/, "")}/i/v1/logs`,
          headers: {
            Authorization: `Bearer ${projectToken}`,
            "Content-Type": "application/json",
          },
        }),
      }),
    ]
  : [];

export const posthogLogProvider = new LoggerProvider({
  resource: resourceFromAttributes({
    "service.name": "sheeba-nutritionist-website",
    "deployment.environment": process.env.VERCEL_ENV || process.env.NODE_ENV || "production",
  }),
  processors,
});

export function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs" || process.env.NODE_ENV !== "development") {
    return;
  }

  if (!projectToken) {
    console.error(
      "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is configured"
    );
  }

  if (!posthogHost) {
    console.error(
      "NEXT_PUBLIC_POSTHOG_HOST variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once NEXT_PUBLIC_POSTHOG_HOST is configured"
    );
  }
}
