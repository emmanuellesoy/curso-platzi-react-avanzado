/* global window */
import React from "react";

import GlobalStyles from "./globalStyles";
import {
    Categories,
    PhotoCard,
    Logo,
    Wall
} from "./components";

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
                        <>
                            <Categories />
                            <Wall />
                        </>
                    )
            }
        </>
    );
};

export default App;
