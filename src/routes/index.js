import Dashboard from "../pages/Dashboard";

export const routePaths = {
  home: "/dashboard"
};

export const routes = [
  {
    title: "Dashboard",
    path: routePaths.home,
    url: routePaths.home,
    exact: true,
    main: Dashboard
  },
  {
    title: "Home",
    path: "*",
    url: "*",
    exact: true,
    main: Dashboard
  } //eslint-disable-line
];
