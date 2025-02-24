import type { FC } from "react";
import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export const meta = ({}: Route.MetaArgs) => [
	{ title: "New React Router App" },
	{ name: "description", content: "Welcome to React Router!" },
];

const Home: FC = () => {
	return (
		<>
			index
			<Welcome />
		</>
	);
};

export default Home;
