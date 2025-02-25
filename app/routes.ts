import {
	type RouteConfig,
	index,
	layout,
	route,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
	route("/test/app", "./test-in-app.tsx"),
	layout("./marketing/layout.tsx", [
		index("./marketing/home.tsx"),
		route("contact", "./marketing/contact.tsx"),
	]),
	...(await flatRoutes()),
] satisfies RouteConfig;
