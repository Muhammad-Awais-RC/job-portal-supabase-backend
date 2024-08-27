import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<div>
			<div className="grid-background"></div>
			<main className="min-h-screen container">
				<Header />
				<Outlet />
			</main>
			<div className="p-10 text-center bg-gray-950 mt-10">Made with 💗</div>
		</div>
	);
};

export default AppLayout;
