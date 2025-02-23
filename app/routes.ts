import { type RouteConfig, index, route } from "@react-router/dev/routes";

// これと同義（多分`index`用のヘルパー関数が用意されてるだけ）
// export default [route("/", "routes/home.tsx")] satisfies RouteConfig;
export default [
	index("routes/home.tsx"),
	route("dashboard", "routes/dashboard.tsx", [
		// 子ルートは親ルートの`Outlet`にレンダリングされる
		index("routes/dashboard/home.tsx"),
		route("settings", "routes/dashboard/settings.tsx"),
	]),
] satisfies RouteConfig;
