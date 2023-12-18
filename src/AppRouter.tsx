import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { Page404 } from "./pages/Page404";
import { PageLearn } from "./pages/PageLearn";
import { PageProfile } from "./pages/PageProfile";

export const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/learn",
				element: <PageLearn />,
			},
			{
				path: "profile",
				element: <PageProfile />,
			},
			{
				path: "/",
				element: <Navigate to="/learn" replace />,
			},
		],
	},
]);
