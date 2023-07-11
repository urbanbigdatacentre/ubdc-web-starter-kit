// Search Component - Allows users to search for content across the site
// - This is the component that will be used as a popover

import {TextField, Box, IconButton} from "@mui/material";
import {InputAdornment} from "@mui/material";
import React from "react";
import {useTheme} from "@mui/system";
import {SearchRounded} from "@mui/icons-material";
import SearchPopover from "@/components/inputs/SearchPopover";
import PopoverBackground from "@/components/styled/PopoverBackground";

const Search = () => {

    const theme = useTheme();
    const [searchOpen, setSearchOpen] = React.useState(false);

    const handleClick = () => {
        setSearchOpen(!searchOpen)
    }

    return (
        <Box>
            <TextField
                autoComplete='off'
                onClick={handleClick}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchRounded sx={{color: theme.palette.grey[500]}} />
                        </InputAdornment>
                    ),
                }}
                sx={{...SearchStyles, [theme.breakpoints.down('md')]: {
                        display: `none`
                    },}}
                hiddenLabel
                id="filled-hidden-label-small"
                placeholder="Search"
                variant="filled"
                size="small"
            />
            <IconButton sx={{
                display: `none`,
                height: 35,
                width: 35,
                backgroundColor: theme.palette.action.hover,
                [theme.breakpoints.down('md')]: {
                    display: `flex`
                },
            }} onClick={handleClick}>
                <SearchRounded sx={{color: theme.palette.grey[500]}} />
            </IconButton>
            <SearchPopover open={searchOpen} setOpen={setSearchOpen}/>
            <PopoverBackground open={searchOpen} setOpen={setSearchOpen}/>
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