import { createBrowserRouter } from "react-router-dom";
import { CostPage } from "../pages/CostPage";
import { NotFound } from "../pages/NotFound";
import { pathRoute } from "../utils/pathRoute";

export const router = createBrowserRouter([
	{
        errorElement: <NotFound />,
		path: pathRoute.cost,
         element: <CostPage />
	},
]);