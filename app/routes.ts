import {
	type RouteConfig,
	index,
	layout,
	prefix,
	route,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
	route("/test/app", "./test-in-app.tsx"),
	layout("./marketing/layout.tsx", [
		index("./marketing/home.tsx"),
		route("contact", "./marketing/contact.tsx"),
	]),
	...prefix("projects", [
		index("./projects/home.tsx"),
		layout("./projects/project-layout.tsx", [
			route(":pid", "./projects/project.tsx"),
			route(":pid/edit", "./projects/edit-project.tsx"),
		]),
	]),
	...(await flatRoutes()),
] satisfies RouteConfig;
