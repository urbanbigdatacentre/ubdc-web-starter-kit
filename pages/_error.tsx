// Custom Error Page
import {ErrorProps} from "next/error";
import Head from "next/head";
import {Typography, Stack, Avatar, Button} from "@mui/material";
import React from "react";
import BasePageComponents from "@/components/layouts/BasePageComponents";
import StandardContainer from "@/components/layouts/StandardContainer";
import {Container, useTheme} from "@mui/system";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import {useRouter} from "next/router";

const ErrorPage = (props: ErrorProps) => {

    const theme = useTheme();
    const router = useRouter();


    return (
        <BasePageComponents>
            <Head>
                <title>Ooops!</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <Container  sx={{marginTop: theme.spacing(12)}}>
                <Stack sx={{gap: theme.spacing(5), paddingBottom: theme.spacing(8), width: `100%`, marginTop: { xs: theme.spacing(5), md: 0 }, alignItems: 'center'}}>
                    <Typography variant={'h1'}>Something went wrong</Typography>
                    <Typography variant={'body2'} sx={{color: theme.palette.grey[500]}}>{'Looks like there was a problem with the markdown content you are trying to render on this page'}</Typography>
                    <Avatar alt="UBDC Logo" src="/icons/no-content-blue.svg" sx={{width: `60px`, height: `60px`}}/>
                    <Button variant={'contained'} sx={{gap: theme.spacing(2), display: `flex`, justifyContent: `space-between`, color:  theme.palette.grey[900],}} onClick={() => router.push('/')}>
                        <Typography variant={'body2'} sx={{color: theme.palette.grey[900], textTransform: `capitalize`}}>{'Go Home'}</Typography>
                        <ArrowForwardRoundedIcon style={{fontSize: 18}}/>
                    </Button>
                </Stack>
            </Container>
        </BasePageComponents>
    )
}

export default ErrorPage;