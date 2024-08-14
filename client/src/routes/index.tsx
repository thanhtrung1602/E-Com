import config from "~/config";
import { LoginLayout, MainLayout } from "~/layouts";
import Blog from "~/pages/Blog";
import Categories from "~/pages/Categories";
import Contact from "~/pages/Contact";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Products from "~/pages/Products";
import Register from "~/pages/Register";
import Shop from "~/pages/Shop";
import { Route } from "~/types/routeType";

const publicRoutes: Route[] = [
    { path: config.routes.login, component: Login, layout: LoginLayout },
    { path: config.routes.register, component: Register, layout: LoginLayout },
    { path: config.routes.home, component: Home, layout: MainLayout },
    { path: config.routes.shop, component: Shop, layout: MainLayout },
    { path: config.routes.contact, component: Contact, layout: MainLayout },
    { path: config.routes.blog, component: Blog, layout: MainLayout },
    { path: config.routes.products, component: Products, layout: MainLayout },
    { path: config.routes.categories, component: Categories, layout: MainLayout },
]

export { publicRoutes };