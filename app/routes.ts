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
			...prefix(":kjcd/building/:building-id", [
				route("drawings", "./routes/drawings.tsx"),
				route("fabrication", "./routes/fabrication.tsx"),
				route("construction", "./routes/construction.tsx"),
				route("master", "./routes/master.tsx"),
				route("chart", "./routes/chart.tsx"),
			]),
		]),
	]),
] satisfies RouteConfig;
