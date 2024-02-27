import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import {Suspense} from "react";
import {Other} from "@/pages/components/other";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/other',
                element: <Suspense fallback={'Loading...'}><Other/></Suspense>
            },
        ],
    },
]

export const router = createBrowserRouter(routes);

export default routes;