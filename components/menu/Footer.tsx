// Simple Footer Component to render at the bottom of each docs page

import {Typography, Stack, Divider} from "@mui/material";
import {useTheme} from "@mui/system";

const Footer = () => {

    const theme = useTheme();

    return (
        <Stack sx={{gap: theme.spacing(2)}}>
            <Divider/>
            <Typography variant={'caption'}>© Urban Big Data Centre, University of Glasgow, 2023</Typography>
            <Typography variant={'caption'} sx={{color: theme.palette.grey[500]}}>Developed by the Data Science Team @ UBDC</Typography>
        </Stack>
    )
}

export default Footer;