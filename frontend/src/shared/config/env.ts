// Stub for environment configuration and validation
export const ENV = {
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "https://www.sequoiainsilico.com",
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
  NODE_ENV: process.env.NODE_ENV || "development",
} as const;
