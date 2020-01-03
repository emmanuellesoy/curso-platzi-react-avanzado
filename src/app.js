import React from "react";

import GlobalStyles from "./globalStyles";
import {
    Categories,
    Logo,
    PhotoCard
} from "./components";

const App = () => (
    <>
        <GlobalStyles />
        <Logo />
        <Categories />
        <PhotoCard />
    </>
);

export default App;
