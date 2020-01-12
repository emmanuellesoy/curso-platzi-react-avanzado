/* global window */
import React from "react";
import { Router } from "@reach/router";

import GlobalStyles from "./styles/globalStyles";
import {
    Logo,
    NavBar,
} from "./components";

import {
    Detail,
    Home
} from "./pages";

const App = () => (
    <>
        <GlobalStyles />
        <Logo />
            <Router>
                <Home path="/" />
                <Home path="/category/:categoryId" />
                <Detail path="detail/:id" />
            </Router>
        <NavBar />
    </>
);

export default App;
