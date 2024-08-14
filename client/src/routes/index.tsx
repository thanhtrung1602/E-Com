import config from "~/config";
import { LoginLayout, MainLayout } from "~/layouts";
import Categories from "~/pages/Categories";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Products from "~/pages/Products";
import Register from "~/pages/Register";
import { Route } from "~/types/routeType";

const publicRoutes: Route[] = [
    { path: config.routes.login, component: Login, layout: LoginLayout },
    { path: config.routes.register, component: Register, layout: LoginLayout },
    { path: config.routes.home, component: Home, layout: MainLayout },
    { path: config.routes.products, component: Products, layout: MainLayout },
    { path: config.routes.categories, component: Categories, layout: MainLayout },
]

export { publicRoutes };