import {useRouter} from "next/router";
import {useAuthenticationStatus} from "@nhost/react";
import {Box, CircularProgress} from "@mui/material";
import {useTheme} from "@mui/system";

const authRestricted = (WrappedComponent: any) => {
    return function AuthLogic (props: any) {

        const theme = useTheme();
        const router = useRouter();
        const {isAuthenticated, isLoading, isError, error} = useAuthenticationStatus();

        // Error
        if (isError) {
            console.error(error);
            // REQUIRES LOGIC HERE
        }
        // Loading
        if (isLoading) {
            return (
                <Box sx={{display: `flex`, alignItems: `center`, justifyContent: `center`, width: `100%`}}>
                    <CircularProgress size={25} sx={{padding: theme.spacing(2)}} />
                </Box>
            )
        }
        // Not Authenticated
        if (!isAuthenticated) {
            router.push('/auth/sign-in')
            return null
        }

        return <WrappedComponent {...props} />
    }
}

export default authRestricted;