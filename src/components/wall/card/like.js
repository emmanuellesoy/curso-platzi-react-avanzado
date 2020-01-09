import PropTypes from "prop-types";
import React from "react";
import {
    FaHeart,
    FaRegHeart
} from "react-icons/fa";

import {
    Button,
} from "./styles";


const Like = (props) => {
    const {
        like,
        likes,
        onClick,
    } = props;
    const Icon = (like) ? FaHeart : FaRegHeart;
    
    return (
        <Button type="button" onClick={onClick}>
            <Icon size="16" />{likes}
        </Button>
    );
};

Like.propTypes = {
    like: PropTypes.bool,
    likes: PropTypes.number,
    onClick: PropTypes.func,
};

Like.defaultProps = {
    like: false,
    likes: 0,
    onClick: () => null,
};

export default Like;
