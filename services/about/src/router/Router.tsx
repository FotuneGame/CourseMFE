import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import {About} from "@/pages/components/about";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <About/>
            },
        ],
    },
]

export const router = createBrowserRouter(routes);

export default routes;