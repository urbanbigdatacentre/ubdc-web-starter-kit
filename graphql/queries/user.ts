import {gql} from "@apollo/client";

export const GET_USER_QUERY = gql`
    query GetUser($id: uuid!) {
        user(id: $id) {
            id,
            email,
            displayName,
            metadata,
        }
    }
`;