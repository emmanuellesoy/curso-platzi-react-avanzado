import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

import List from "./list";

const query = graphql(gql`
  query getPhotos($categoryId: ID) {
      photos(categoryId: $categoryId) {
          id
          categoryId
          src
          likes
          userId
          liked
      }
  }
`);

const PhotoCard = query(List);

export default PhotoCard;
