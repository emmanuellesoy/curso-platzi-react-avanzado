import PropTypes from "prop-types";
import React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

const mutation = gql`
    mutation likeAnonymousPhoto($input: LikePhoto!) {
        likeAnonymousPhoto(input: $input) {
            id,
            likes,
            liked,
        }
    }
`;

const ToggleLike = (props) => {
    const {
        children,
    } = props;
    return (
        <Mutation mutation={mutation}>
            {children}
        </Mutation>
    );
};

ToggleLike.propTypes = {
    children: PropTypes.func,
};

ToggleLike.defaultProps = {
    children: () => null,
};

export default ToggleLike;
