import { LayoutError } from "@layouts";
import { IRoute } from "@interfaces";
import { PageError404, PageHome } from "@pages";

export const PATH_HOME = "/";
export const PATH_404 = "/*";

export const routes: Array<IRoute> = [
  //home
  { path: PATH_HOME, component: PageHome, exact: true },

  { component: PageError404, exact: false, layout: LayoutError },
];
export const normalRoutes = [PATH_HOME];

export const authRoutes = [];
