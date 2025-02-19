import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Files from "./pages/Files";
import Starred from "./pages/Starred";
import Archived from "./pages/Archived";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
			// staleTime: 60 * 1000,
		},
	},
});
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate replace to='home' />} />
						<Route path='home' element={<Home />} />
						<Route path='files' element={<Files />} />
						<Route path='starred' element={<Starred />} />
						<Route path='archived' element={<Archived />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
