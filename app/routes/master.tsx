import type { FC } from "react";
import type { Route } from "./+types/master";

const Master: FC<Route.ComponentProps> = ({ params }) => {
	return (
		<div>
			Master
			<pre>{JSON.stringify(params, null, 2)}</pre>
		</div>
	);
};

export default Master;
