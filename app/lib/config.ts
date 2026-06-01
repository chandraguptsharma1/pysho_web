const DEFAULT_API_BASE_URL = "https://vishwakarma-backend-dirp.onrender.com/api";

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  DEFAULT_API_BASE_URL
).replace(/\/+$/, "");
