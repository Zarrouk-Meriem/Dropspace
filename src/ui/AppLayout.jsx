import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

function AppLayout() {
	return (
		<div className='appLayout'>
			<Header />
			<Sidebar />
			<main>
				<div className='container'>
					<Outlet />
				</div>
			</main>
		</div>
	);
}

export default AppLayout;
