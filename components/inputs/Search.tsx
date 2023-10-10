// Search Component - Allows users to search for content across the site
// - This is the component that will be used as a popover

import { Box, IconButton, Button, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/system";
import { SearchRounded } from "@mui/icons-material";
import SearchPopover from "@/components/inputs/SearchPopover";
import PopoverBackground from "@/components/styled/PopoverBackground";

const Search = () => {

    const theme = useTheme();
    const [searchOpen, setSearchOpen] = React.useState(false);

    const handleClick = () => {
        const sidebarDrawer = document.querySelector<HTMLElement>('#sidebar-drawer');
        if (!sidebarDrawer?.ariaHidden) {
            const hamburger = document.querySelector<HTMLElement>('#hamburger-button');
            if (hamburger) {
                hamburger.click();
            }
        }

        setSearchOpen(!searchOpen);
    }

    return (
        <Box>
            <Button
                onClick={handleClick}
                variant={'outlined'}
                sx={{
                    ...SearchStyles, display: `flex`, paddingTop: `5px`, paddingBottom: `5px`, paddingLeft: `5px`, paddingRight: `15px`, border: `1px solid ${theme.palette.grey[300]}`, gap: theme.spacing(1), [theme.breakpoints.down('md')]: {
                        display: `none`
                    },
                }}
            >
                <SearchRounded sx={{ color: theme.palette.grey[500] }} />
                <Typography variant={'body2'} sx={{ color: theme.palette.grey[500], textTransform: `capitalize` }}>Search</Typography>
            </Button>
            <IconButton sx={{
                display: `none`,
                height: 35,
                width: 35,
                backgroundColor: `transparent`,
                // border: `1px solid ${theme.palette.grey[300]}`,
                [theme.breakpoints.down('md')]: {
                    display: `flex`
                },
            }} onClick={handleClick}>
                <SearchRounded sx={{ color: theme.palette.grey[500] }} />
            </IconButton>
            <SearchPopover open={searchOpen} setOpen={setSearchOpen} />
            <PopoverBackground open={searchOpen} setOpen={setSearchOpen} />
        </Box>

    )
}

export const SearchStyles = {
    '& .MuiInputBase-root': {
        borderRadius: `5px`,
        paddingRight: `5px`,
        border: `1px solid #e0e0e0`,
        '&:hover': {
            border: `1px solid #e0e0e0`,
        },
        '&.Mui-focused': {
            border: `1px solid #e0e0e0`,
        },
        '& .MuiInputBase-input': {
            padding: `7px 0px 7px 0px`,
            paddingRight: `10px`,
            fontWeight: 300,

        }
    }
}
export default Search;