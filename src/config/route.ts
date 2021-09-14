import { IRoute } from "../interfaces";
import CityPage from "../pages/city/city";
import ErrorPage from "../pages/error";
import HomePage from "../pages/home";

export const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
    exact: true,
  },
  {
    path: "/city/:country/:state/:city",
    name: "City Page",
    component: CityPage,
    exact: true,
  },
  {
    path: "*",
    name: "404 Page",
    component: ErrorPage,
    exact: false,
  },
];
