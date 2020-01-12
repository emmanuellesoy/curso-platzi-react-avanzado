import React from "react";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";

import {
    A,
    NavivagtionBar,
} from "./styles";

const size = "28px";

const NavBar = () => (
    <NavivagtionBar>
        <A to="/"><MdHome size={size} /></A>
        <A to="/favs"><MdFavoriteBorder size={size} /></A>
        <A to="/user"><MdPersonOutline size={size} /></A>
    </NavivagtionBar>
);

export default NavBar;

