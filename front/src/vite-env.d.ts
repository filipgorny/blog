// vite-env.d.ts
// <reference types="vite/client" />
// <reference types="vite-plugin-pages/client-react" />

declare module "route-views" {
  const routes: import("react-router-dom").RouteObject[];

  export default routes;
}
