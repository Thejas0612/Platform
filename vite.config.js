import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import getEnvModule from "./env";

getEnvModule().setEnvironmentVarsFromTestEnv(__dirname);

process.env.CLIENT_ID = process.env.SPA_CLIENT_ID || process.env.CLIENT_ID;

const env = {};

// List of environment variables made available to the app
// [
//   'ISSUER',
//   'CLIENT_ID'
// ].forEach((key) => {
//   if (!process.env[key]) {
//     throw new Error(`Environment variable ${key} must be set. See README.md`);
//   }
//   env[key] = process.env[key];
// });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": env
  },
  resolve: {
    // alias: {
    //   '@okta/okta-auth-js': path.resolve(__dirname, 'node_modules/@okta/okta-auth-js/dist/okta-auth-js.umd.js'),
    //   'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom')
    // }
  },
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
