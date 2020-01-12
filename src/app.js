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
    Favorites,
    Forbidden,
    Home,
    Profile,
} from "./pages";

const Auth = ({ children }) => {
    return children({ isAuth: false });
};

const App = () => (
    <>
        <GlobalStyles />
        <Logo />
            <Router>
                <Home path="/" />
                <Home path="/category/:categoryId" />
                <Detail path="detail/:id" />
            </Router>
            <Auth>
                {
                    ({ isAuth }) => (
                        isAuth
                        ? (
                            <Router>
                                <Favorites path="/favs" />
                                <Profile path="/user" />
                            </Router>
                        )
                        : (
                            <Router>
                                <Forbidden path="/favs" />
                                <Forbidden path="/user" />
                            </Router>
                        )
                    )
                }
            </Auth>
        <NavBar />
    </>
);

export default App;
