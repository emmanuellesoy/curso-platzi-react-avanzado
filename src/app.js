/* global window */
import React from "react";

import GlobalStyles from "./globalStyles";
import {
    Categories,
    Logo,
    PhotoCard
} from "./components";

const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search);
    const detail = urlParams.get("detail");
    
    return (
        <>
            <GlobalStyles />
            <Logo />
            <Categories />
            {
                (detail)
                    ? (
                        <h1>Detail: {detail}</h1>
                    )
                    : (
                        <PhotoCard categoryId={1} />
                    )
            }
        </>
    );
};

export default App;
