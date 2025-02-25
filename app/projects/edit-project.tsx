import type { FC } from "react";
import type { Route } from "./+types/edit-project";

const Project: FC<Route.ComponentProps> = ({ params }) => {
	return <div>project {params.pid}</div>;
};

export default Project;
