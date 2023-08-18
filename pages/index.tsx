import Head from 'next/head'
import {Typography, Stack, Box, Divider, Button} from "@mui/material";
import BasePageComponents from "@/components/layouts/BasePageComponents";
import StandardContainer from "@/components/layouts/StandardContainer";
import {services} from "@/config/serviceDefinition";
import {useTheme} from "@mui/system";
import {siteDescription, siteTitle} from "@/config/appConfig";
import LandingServiceButton from "@/components/buttons/landingServiceButton";
import {useState} from "react";

const Home = () => {

    const theme = useTheme();
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <BasePageComponents>
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content={siteDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <StandardContainer>
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

                    <Button sx={{maxWidth: `250px`, marginTop: theme.spacing(4)}} variant={'contained'}>Continue</Button>
                </Stack>
            </StandardContainer>

        </BasePageComponents>
    )
}

export default Home;