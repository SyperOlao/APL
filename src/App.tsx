import React from 'react';
import {Dashboard} from "./Dashboard/Dashboard";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Dashboard/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
