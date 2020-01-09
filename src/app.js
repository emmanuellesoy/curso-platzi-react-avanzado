/* global window */
import React from "react";
import { Router } from "@reach/router";

import GlobalStyles from "./globalStyles";
import {
    PhotoCard,
    Logo,
} from "./components";

import { Home } from "./pages";

const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search);
    const detail = urlParams.get("detail");
    
    return (
        <>
            <GlobalStyles />
            <Logo />
            {
                (detail)
                    ? (
                        <PhotoCard id={detail} />
                    )
                    : (
                        <Router>
                            <Home path="/" />
                            <Home path="/category/:categoryId" />
                        </Router>
                    )
            }
        </>
    );
};

export default App;
