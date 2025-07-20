export const getServerUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  if (process.env.PLAYWRIGHT_TEST_BASE_URL) {
    return process.env.PLAYWRIGHT_TEST_BASE_URL;
  }

  // if we are in production, we return the production url
  if (process.env.VERCEL_ENV === "production") {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  // if we are in stage, we return the preview url
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // if we are in development, we return the local url
  return "http://localhost:3000";
};
