import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { Page404 } from "./pages/Page404";
import { PageAbout } from "./pages/PageAbout";
import { PageInfo } from "./pages/PageInfo";
import { PageLearn } from "./pages/PageLearn";

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
				path: "info",
				element: <PageInfo />,
			},
			{
				path: "about",
				element: <PageAbout />,
			},
			{
				path: "/",
				element: <Navigate to="/learn" replace />,
			},
		],
	},
]);
