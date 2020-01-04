import PropTypes from "prop-types";
import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Card from "../wall/card";
import Loading from "../loading";

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const PhotoCard = (props) => {
    const {
        id,
    } = props;
    return (
        <Query query={query} variables={{ id }} >
            {
                ({ loading, data, error }) => {
                    if ( loading ) {
                        return (
                            <Loading.Wrapper>
                                <Loading.Spinner size="320" />
                            </Loading.Wrapper>
                        );
                    }
                    if ( error ) {
                        return <h1>¡Error!</h1>;
                    }
                    const {
                        photo
                    } = data;
                    return (
                        <Card
                            id={photo.id}
                            src={photo.src}
                            likes={photo.likes}
                        />
                    );
                }
            }
        </Query>
    );
};

PhotoCard.propTypes = {
    id: PropTypes.string.isRequired,
};

export default PhotoCard;
