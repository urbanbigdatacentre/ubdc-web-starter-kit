// Search List Item Button for use in Search Menu

import {Avatar, Button, ListItemButton, ListItemIcon, Typography, Box} from "@mui/material";
import React from "react";
import {useTheme} from "@mui/system";
import {useRouter} from "next/router";
import TagBlock from "@/components/markdown/TagBlock";
import {Index} from "unist-util-visit-parents";


type SearchListItemButtonProps = {
    iconSrc: string,
    title: string,
    src: string,
    content: string,
    setOpen: (open: boolean) => void,
    tags: string[],
    category: string
}

const removeMD = require('remove-markdown');

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
                <Avatar alt="Docs Icon" src={props.iconSrc} sx={{width: `25px`, height: `25px`}}/>
            </ListItemIcon>
            <Box sx={{display: `flex`, justifyContent: `space-between`, width: `100%`}}>
                <Box sx={{display: `flex`, gap: theme.spacing(2)}}>
                    <Typography variant={'body2'} sx={{color: theme.palette.grey[700], fontWeight: `600 !important`}}>{props.title}</Typography>
                    <Typography variant={'caption'} sx={{color: theme.palette.grey[500], fontWeight: `300 !important`,
                        [theme.breakpoints.down('md')]: {
                            display: `none`
                        },
                    }}>/ {props.category}</Typography>
                    {
                        props?.tags ? props.tags.map((tag: string, index: Index) => {
                            if (index < 1)
                            return (
                                <Box  key={index} sx={{gap: theme.spacing(1), display: `flex`,
                                    [theme.breakpoints.down('md')]: {
                                        display: `none`
                                    },
                                }}>
                                    <TagBlock text={tag}/>
                                    <Typography variant={'caption'} sx={{color: theme.palette.grey[500], fontWeight: `300 !important`}}>+{props.tags.length - 1}</Typography>
                                </Box>
                            )
                        }): null
                    }
                    <Typography variant={'caption'} sx={{color: theme.palette.grey[900], fontWeight: 300,
                        [theme.breakpoints.down('md')]: {
                            display: `none`
                        },
                    }}>... {removeMD(props.content)} ...</Typography>
                </Box>
                <Typography variant={'caption'} sx={{color: theme.palette.grey[700], fontWeight: 400, paddingLeft: theme.spacing(2), paddingRight: theme.spacing(2)}}>Jump To</Typography>
            </Box>

        </ListItemButton>
    )
};

export default SearchListItemButton;