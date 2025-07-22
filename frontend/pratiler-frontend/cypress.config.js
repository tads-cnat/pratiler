import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost",
    viewportWidth: 1280,
		viewportHeight: 936,
		testIsolation: false,
		retries: { openMode: 2 },
  },
  env: {
    API_BASE_URL: "http://localhost:8000/api"
  }
});
