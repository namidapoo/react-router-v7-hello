import type { FC } from "react";
import type { Route } from "./+types/project";
import { mock } from "./mock";

export const loader = async ({ params }: Route.ComponentProps) => {
	const project = mock.find((p) => p.id === Number(params.pid));
	return project;
};

// `props`からデータを取得する
const Project: FC<Route.ComponentProps> = ({ params, loaderData }) => {
	return (
		<div>
			project {params.pid}
			<pre>{JSON.stringify(loaderData, null, 2)}</pre>
		</div>
	);
};

export default Project;
