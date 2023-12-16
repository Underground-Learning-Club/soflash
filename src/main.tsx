import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.scss";
import { router } from "./AppRouter";
import { AppProvider } from "./AppContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<AppProvider>
		<RouterProvider router={router} />
	</AppProvider>
);
