import type { FC } from "react";
import type { Route } from "./+types/files";

const Files: FC<Route.ComponentProps> = ({ params }) => {
	// params["*"] には、files/ の後の残りの URL が含まれる
	// `*` を分割できますが、新しい名前を割り当てる必要がある。一般的な名前は `splat`
	const { "*": splat } = params;

	return (
		<div className="flex h-screen items-center justify-center text-2xl">
			project {splat}
		</div>
	);
};

export default Files;
