import type { FC } from "react";
import { Outlet } from "react-router";

const Dashboard: FC = () => {
	return (
		<div className="flex h-screen items-center justify-center gap-4 text-2xl">
			dashboard
			<span>/</span>
			<Outlet />
		</div>
	);
};

export default Dashboard;
