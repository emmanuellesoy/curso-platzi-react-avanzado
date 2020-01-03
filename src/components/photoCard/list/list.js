import PropTypes from "prop-types";
import React from "react";

import Card from "../card";
import Loading from "../../loading";

const List = (props) => {
    const {
        data,
    } = props;
    return (
        <ul>
            {
                (data.photos)
                    ? (
                        data.photos.map(photo => (
                            <li key={photo.id}>
                                <Card
                                    id={photo.id}
                                    src={photo.src}
                                    likes={photo.likes}
                                />
                            </li>
                        ))
                    )
                    : (
                        <Loading.Wrapper>
                            <Loading.Spinner size="45" />
                        </Loading.Wrapper>
                    )
            }
        </ul>
    );
};

List.propTypes = {
    data: PropTypes.shape({
        photos: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

List.defaultProps = {
    data: {
        photos: [],
    },
};

export default List;
