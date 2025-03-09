import type { FC } from "react";
import { Outlet } from "react-router";

const Layout: FC = () => {
	return (
		<div>
			Layout
			<Outlet />
		</div>
	);
};

export default Layout;
