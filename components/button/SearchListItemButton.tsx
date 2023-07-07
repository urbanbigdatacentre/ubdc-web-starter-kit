// Search List Item Button for use in Search Menu

import {Avatar, Button, ListItemButton, ListItemIcon, Typography, Box} from "@mui/material";
import React from "react";
import {useTheme} from "@mui/system";
import {useRouter} from "next/router";


type SearchListItemButtonProps = {
    iconSrc: string,
    title: string,
    src: string,
    content: string,
    setOpen: (open: boolean) => void
}

const SearchListItemButton = (props: SearchListItemButtonProps) => {

    const theme = useTheme();
    const router = useRouter();

    const handleClick = () => {
        props.setOpen(false)
        router.push(props.src)
    }

    return (
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <Avatar alt="Docs Icon" src={props.iconSrc} sx={{width: `35px`, height: `35px`}}/>
            </ListItemIcon>
            <Box sx={{display: `flex`, justifyContent: `space-between`, width: `100%`}}>
                <Box sx={{display: `flex`, gap: theme.spacing(2)}}>
                    <Typography variant={'body2'} sx={{color: theme.palette.grey[700]}}>{props.title}</Typography>
                    <Typography variant={'caption'} sx={{color: theme.palette.grey[500], fontWeight: 300}}>{props.content}</Typography>
                </Box>
                <Typography variant={'caption'} sx={{color: theme.palette.grey[700], fontWeight: 400, paddingLeft: theme.spacing(2), paddingRight: theme.spacing(2)}}>Jump To</Typography>
            </Box>

        </ListItemButton>
    )
};

export default SearchListItemButton;