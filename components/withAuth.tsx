import {useRouter} from "next/router";
import {useAuthenticationStatus} from "@nhost/react";
import {Box, CircularProgress} from "@mui/material";
import {useTheme} from "@mui/system";

const withAuth = (WrappedComponent: any) => {
    return function AuthLogic (props: any) {

        const theme = useTheme();
        const router = useRouter();
        const {isAuthenticated, isLoading, isError, error, connectionAttempts} = useAuthenticationStatus();

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
            router.push('/login')
            return null
        }

        return <WrappedComponent {...props} />
    }
}

export default withAuth;