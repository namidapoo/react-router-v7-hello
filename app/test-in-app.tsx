import type { FC } from "react";
import { Outlet } from "react-router";

const TestInApp: FC = () => {
	return (
		<div>
			test in app
			<Outlet />
		</div>
	);
};

export default TestInApp;
