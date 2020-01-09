import PropTypes from "prop-types";
import React from "react";

import {
    Categories,
    Wall
} from "../components";

const Home = (props) => {
    const { categoryId } = props;
    return (
        <>
            <Categories />
            <Wall categoryId={categoryId} />
        </>
    );
};

Home.propTypes = {
    categoryId: PropTypes.string,
};

Home.defaultProps = {
    categoryId: "",
};

export default Home;
