import { type RouteConfig, index } from "@react-router/dev/routes";

// これと同義（多分`index`用のヘルパー関数が用意されてるだけ）
// export default [route("/", "routes/home.tsx")] satisfies RouteConfig;
export default [index("routes/home.tsx")] satisfies RouteConfig;
