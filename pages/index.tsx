import Head from 'next/head'
import {Typography, Stack, Box, Divider, Button} from "@mui/material";
import BasePageComponents from "@/components/layouts/BasePageComponents";
import StandardContainer from "@/components/layouts/StandardContainer";
import {services} from "@/config/serviceDefinition";
import {useTheme} from "@mui/system";
import {siteDescription, siteTitle} from "@/config/appConfig";
import LandingServiceButton from "@/components/buttons/landingServiceButton";
import React, {useState} from "react";
import {useRouter} from "next/router";
import {toast, Toaster} from "react-hot-toast";

const Home = () => {

    const theme = useTheme();
    const router = useRouter();
    const [selectedValue, setSelectedValue] = useState('');

    const handleContinue = () => {
        if (selectedValue === '') {
            toast.error("Please select a service to continue.");
            return;
        }
        router.push(`${selectedValue}`);
    }

    return (
        <BasePageComponents>
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content={siteDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <StandardContainer>
                <Toaster toastOptions={{
                    style: {
                        fontFamily: `Poppins !important`,
                    },
                }}/>
                <Stack sx={{width: `100%`, alignItems: `center`}}>
                    <Typography variant={'body1'} sx={{textAlign: `center`}}>Pick a service</Typography>
                    <Typography variant={'caption'} sx={{textAlign: `center`}}>The following services are offered by this starter kit. Choose one to try it out!</Typography>
                    <Divider sx={{margin: `1rem 0`}} />

                    <Box sx={{display: `flex`, flexWrap: `wrap`, gap: theme.spacing(4), justifyContent: `center`}}>
                        {
                            services.map((service, index) => {
                                return (
                                    <LandingServiceButton key={index} service={service}  handleChange={setSelectedValue} selectedValue={selectedValue}/>
                                )
                            })
                        }
                    </Box>

                    <Button onClick={handleContinue} sx={{maxWidth: `250px`, marginTop: theme.spacing(4)}} variant={'contained'}>Continue</Button>
                </Stack>
            </StandardContainer>

        </BasePageComponents>
    )
}

export default Home;