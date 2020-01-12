import PropTypes from "prop-types";
import React from "react";

import { PhotoCard } from "../components";

const Detail = (props) => {
    const {
        id
    } = props;
    return <PhotoCard id={id} />;
};

Detail.propTypes = {
    id: PropTypes.string,
};

Detail.defaultProps = {
    id: "0",
};

export default PhotoCard