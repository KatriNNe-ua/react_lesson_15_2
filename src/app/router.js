import MainLayout from "../widgets/MainLayout/MainLayout";
import Home from "../pages/Home";
import Dream from "../pages/Dream";
import DreamEdit from "../pages/DreamEdit";
import Page404 from "../pages/Page404";
import { createBrowserRouter } from "react-router";

export const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "dreams",
        Component: Dream,
      },
      {
        path: "/dreams/add",
        Component: DreamEdit,
      },
      {
        path: "/dreams/edit/:id",
        Component: DreamEdit,
      },
	  {
		path:"*",
		Component: Page404
	  }
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
