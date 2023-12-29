import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { Page404 } from "./pages/Page404";
import { PageLearn } from "./pages/PageLearn";
import { PageProfile } from "./pages/PageProfile";
import { PageAdd } from "./pages/PageAdd";

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
				path: "add",
				element: <PageAdd />,
			},
			{
				path: "/",
				element: <Navigate to="/learn" replace />,
			},
		],
	},
]);
