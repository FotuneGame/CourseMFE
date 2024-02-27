import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
//@ts-ignore
import aboutRoutes from 'about/Router';
//@ts-ignore
import otherRoutes from 'other/Router';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            ...aboutRoutes,
            ...otherRoutes,
        ],
    },
]);