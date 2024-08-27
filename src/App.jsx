import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import JobPage from "./pages/JobPage";
import SavedJobs from "./pages/SavedJobs";
import MyJobs from "./pages/MyJobs";
import PostJob from "./pages/PostJob";
import JobListing from "./pages/JobListing";
import OnboardingPage from "./pages/OnboardingPage";
import { ThemeProvider } from "./components/ThemeProvider";

import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <LandingPage />,
			},
			{
				path: "/onboarding",
				element: (
					<ProtectedRoute>
						<OnboardingPage />
					</ProtectedRoute>
				),
			},
			{
				path: "/jobs",
				element: (
					<ProtectedRoute>
						<JobListing />
					</ProtectedRoute>
				),
			},
			{
				path: "/post-job",
				element: (
					<ProtectedRoute>
						<PostJob />
					</ProtectedRoute>
				),
			},
			{
				path: "/my-jobs",
				element: (
					<ProtectedRoute>
						<MyJobs />
					</ProtectedRoute>
				),
			},
			{
				path: "/saved-jobs",
				element: (
					<ProtectedRoute>
						<SavedJobs />
					</ProtectedRoute>
				),
			},
			{
				path: "/job/:id",
				element: (
					<ProtectedRoute>
						<JobPage />
					</ProtectedRoute>
				),
			},
		],
	},
]);

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
