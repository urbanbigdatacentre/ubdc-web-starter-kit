import {gql} from "@apollo/client";

// Permission to retrieve all users: Must be set in Hasura console initially (default none)
// See more information here: https://docs.nhost.io/quickstarts/nextjs#update-user-data
// Hasura Console at http://localhost:1337/console/data/default/schema/auth/tables/users/permissions
export const UPDATE_USER_MUTATION = gql`
    mutation ($id: uuid!, $displayName: String!, $metadata: jsonb) {
        updateUser(pk_columns: { id: $id }, _set: { displayName: $displayName, metadata: $metadata }) {
            id
            displayName
            metadata
        }
    }
`