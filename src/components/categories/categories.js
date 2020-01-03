import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

import List from "./list";

const query = graphql(gql`
  query getPhotos {
      categories {
          id
          name
          emoji
          cover
          path
      }
  }
`);

const Categories = query(List);

export default Categories;
