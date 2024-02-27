import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import {otherRoutes} from "@packages/shared/routes/other";
import {aboutRoutes} from "@packages/shared/routes/about";
import {SortMassive} from "@packages/shared/utils/SortMassive";
import Card from "@packages/shared/UI_KIT/Card";

export const App = () => {

    const [count,setCount] = useState<number>(0);

    const increment = () => setCount(prevState => prevState + 1);
    const decrement = () => setCount(prevState => prevState - 1);
    SortMassive();
    return (
        <div data-testid={'App.DataTestId'}>
            <h1 data-testid={'Platform'}>Платформа на текущий момент для HOST (задана env):{__PLATFORM__}</h1>
            <Link to={aboutRoutes.main}>about</Link>
            <br/>
            <Link to={otherRoutes.main}>other</Link>
            <hr/>
            <Card/>
            <hr/>
            <Outlet/>
        </div>
    );
};