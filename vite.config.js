import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();

process.env.CLIENT_ID = process.env.SPA_CLIENT_ID || process.env.CLIENT_ID;

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env
  },
  resolve: {},
  resolve: {},
  server: {
    port: process.env.PORT || 3000
  },
  build: {
    external: ["emitter"],
    rollupOptions: {
      // always throw with build warnings
      onwarn(warning, warn) {
        console.log({ warning });
        warn(
          '\nBuild warning happened, customize "onwarn" callback in vite.config.js to handle this error.'
        );
        throw new Error(warning);
      },
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-redux", "react-router-dom", "@reduxjs/toolkit"],
          emerson: ["@emerson/dynamic-ui-public"],
          mui: ["@mui/material", "@emotion/react", "@emotion/styled"],
          okta: ["@okta/okta-auth-js", "@okta/okta-react"]
        }
      }
    }
  }
});
