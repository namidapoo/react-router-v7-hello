import { type RouteConfig, route } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
	route("/test/app", "./test-in-app.tsx"),
	...(await flatRoutes()),
] satisfies RouteConfig;
