import type { FC } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

const Main: FC = () => {
	return (
		<div>
			Main
			<Button asChild>
				<Link to="projects/new">New</Link>
			</Button>
		</div>
	);
};

export default Main;
