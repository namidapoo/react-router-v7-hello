import type { FC } from "react";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/edit-project";
import { mock } from "./mock";

export const loader = async ({ params }: Route.ComponentProps) => {
	const project = mock.find((p) => p.id === Number(params.pid));
	return project;
};

const Project: FC<Route.ComponentProps> = ({ params }) => {
	const data = useLoaderData<typeof loader>();
	return (
		<div>
			edit project {params.pid}
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};

export default Project;
