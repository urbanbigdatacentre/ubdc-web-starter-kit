// Tag Block component for markdown

import {Box, Typography, useTheme} from "@mui/material";


const TagBlock = (props: {text: string}) => {

    const theme = useTheme();

    const DarkTags = {
        0: "#FE51B9",
        1: "#5498FF",
        2: "#8650FF",
        3: "#FE51B9",
        4: "#FF545B",
        5: "#FFC54F",
        6: "#52FFAC",
        7: "#4BE8FF",
        8: "#FF9B53",
        9: "#FFEE53"
    }

    return (
        <Box sx={{border: `1px solid ${DarkTags[props.text.length % 10]}`, backgroundColor: theme.palette.grey[100], borderRadius: `5px`, paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1), display: `flex`, justifyContent: `center`, alignItems: `center`, width: `max-content`}}>
            <Typography variant={'caption'} sx={{color: theme.palette.grey[900], fontWeight: 500, textTransform: `capitalize`}}>{props.text}</Typography>
        </Box>
    )
}

export default  TagBlock;