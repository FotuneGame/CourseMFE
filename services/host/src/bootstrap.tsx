import {createRoot} from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import {router} from "@/router/Router";


const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)


container.render(
    <RouterProvider router={router} />
)

import {sum} from "@packages/shared";
console.log(sum(1,1));

import {calc} from "./test";
console.log("ecma import и export не работают node => необходим bundle создоваемый webpack. Результат:",calc(1,1));