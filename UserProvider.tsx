import React, { useContext } from 'react'
// highlight-next-line
import { useUserData } from '@nhost/nextjs'

const UserContext = React.createContext(null as any)
type UserProviderProps = {
    children: string | JSX.Element | JSX.Element[]
}
export function UserProvider( props: UserProviderProps ) {

    const user = useUserData()

    return <UserContext.Provider value={{ user }}>{props.children}</UserContext.Provider>
}

export function useUserContext() {
    return useContext(UserContext)
}