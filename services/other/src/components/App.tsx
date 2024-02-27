import React from 'react';
import classes from './App.module.scss'
import {Outlet} from "react-router-dom";

export const App = () => {

    return (
        <div data-testid={'App.DataTestId'}>
            <h1>Other</h1>
            <h1 data-testid={'Platform'}>Платформа на текущий момент (задана env):{__PLATFORM__}</h1>
            <Outlet/>
        </div>
    );
};