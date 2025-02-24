import type { FC } from "react";
import { Outlet } from "react-router";

const Test: FC = () => {
	return (
		<div>
			test in app routes
			<Outlet />
		</div>
	);
};

export default Test;
