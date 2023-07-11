// Simple Footer Component to render at the bottom of each docs page

import {Typography, Stack, Divider} from "@mui/material";
import {useTheme} from "@mui/system";
import Link from "next/link";

const Footer = () => {

    const theme = useTheme();

    return (
        <Stack sx={{gap: theme.spacing(2)}}>
            <Divider/>
            <Typography variant={'caption'}>© Urban Big Data Centre, University of Glasgow, 2023</Typography>
            <Link href={'https://ubdc.ac.uk'}><Typography variant={'caption'} sx={{color: theme.palette.grey[500], textDecoration: `underline`}}>Developed by the Data Science Team @ UBDC</Typography></Link>
        </Stack>
    )
}

export default Footer;