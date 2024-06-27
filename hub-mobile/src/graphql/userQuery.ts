import { gql } from "@apollo/client";

const userFind = gql`
  query find($id: String!) {
    find(id: $id) {
      name
      desc
      id
    }
  }
`;

export default userFind;
