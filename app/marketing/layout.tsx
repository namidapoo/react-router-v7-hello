import type { FC } from "react";
import { Outlet } from "react-router";

const MarketingLayout: FC = () => {
	return (
		<div className="flex h-screen items-center justify-center gap-4 text-2xl">
			marketing
			<span>/</span>
			<Outlet />
		</div>
	);
};

export default MarketingLayout;
