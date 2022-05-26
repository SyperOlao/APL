import React from 'react';
import {Dashboard} from "./Dashboard/Dashboard";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Dashboard/>
        </BrowserRouter>
    );
}

export default App;
