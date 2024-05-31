import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const RootLayout = lazy(() => import('./RootLayout/RootLayout'));
const Package = lazy(() => import('./pages/Package/Package'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const About1 = lazy(() => import('./pages/About/About1/About1'));
const About2 = lazy(() => import('./pages/About/About2/About2'));
const About3 = lazy(() => import('./pages/About/About3/About3'));
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio'));
const Index = lazy(() => import("./components/Index"));

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{ path: "/", element: <Index /> }],
    },
    {
        path: "/About_1",
        element: <About1 />
    },
    {
        path: "/About_2",
        element: <About2 />
    },
    {
        path: "/About_3",
        element: <About3 />
    },
    {
        path: "/Package",
        element: <Package />
    },
    {
        path: "/Portfolio",
        element: <Portfolio />
    },
    {
        path: "/Contact",
        element: <Contact />
    }
]);