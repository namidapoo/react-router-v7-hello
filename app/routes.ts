import {
	type RouteConfig,
	index,
	layout,
	prefix,
	route,
} from "@react-router/dev/routes";

export default [
	...prefix("main", [
		layout("./routes/layout.tsx", [
			index("./routes/main.tsx"),
			route("projects/new", "./routes/projects/new.tsx"),
			route(":kjcd/building/:building-id/drawings", "./routes/drawings.tsx"),
			route(
				":kjcd/building/:building-id/fabrication",
				"./routes/fabrication.tsx",
			),
			route(
				":kjcd/building/:building-id/construction",
				"./routes/construction.tsx",
			),
			route(":kjcd/building/:building-id/master", "./routes/master.tsx"),
			route(":kjcd/building/:building-id/chart", "./routes/chart.tsx"),
		]),
	]),
] satisfies RouteConfig;
