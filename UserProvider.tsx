import React, { useContext } from 'react';
import { useUserId} from '@nhost/nextjs'
import {gql, useQuery} from "@apollo/client";
import {GET_USER_QUERY} from "@/graphql/queries/user";

const UserContext = React.createContext({});

type UserProviderProps = {
    children: string | JSX.Element | JSX.Element[]
}

export function UserProvider(props: UserProviderProps) {

    const id = useUserId();
    const { loading, error, data } = useQuery(GET_USER_QUERY, {
        variables: { id },
        skip: !id
    })
    const user = data?.user
    if (error) {
        return <p>Something went wrong. Try to refresh the page.</p>
    }
    if (loading) {
        return null
    }
    return (
        <UserContext.Provider value={{ user }}>{props.children}</UserContext.Provider>
);
}

export function useUserContext() {
    return useContext(UserContext);
}
