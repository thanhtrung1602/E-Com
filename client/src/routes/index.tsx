import config from "~/config";
import { MainLayout } from "~/layouts";
import Categories from "~/pages/Categories";
import Home from "~/pages/Home";
import Products from "~/pages/Products";
import { Route } from "~/types/routeType";

const publicRoutes: Route[] = [
    { path: config.routes.home, component: Home, layout: MainLayout },
    { path: config.routes.products, component: Products, layout: MainLayout },
    { path: config.routes.categories, component: Categories, layout: MainLayout },
]

export { publicRoutes };