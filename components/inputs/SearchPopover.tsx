// Core Search Component - This is the component that will be used as a popover

import {
    TextField,
    Box,
    InputAdornment,
    Stack,
    Divider,
    Typography,
    List,
    IconButton,
    ListItemButton, ListItemIcon, Avatar
} from "@mui/material";
import {ClickAwayListener} from "@mui/base";
import {SearchStyles} from "@/components/inputs/Search";
import {Close, SearchRounded} from "@mui/icons-material";
import React, {useCallback} from "react";
import {useTheme} from "@mui/system";
import SearchListItemButton from "@/components/button/SearchListItemButton";
import {Index} from "unist-util-visit-parents";

type SearchPopoverProps = {
    open: boolean,
    setOpen: (open: boolean) => void
}

type SearchResultItem = {
    content: string
    id: string
    isEmpty: boolean
    excerpt: string
    data: {
        title: string
        author: string
        category: string
        tags: string[]

    }

}

const SearchPopover = (props: SearchPopoverProps) => {

    const theme = useTheme();
    const [searchValue, setSearchValue] = React.useState('')
    const [searchResults, setSearchResults] = React.useState([])

    const handleSearch = useCallback((event: React.ChangeEvent) => {
        const query = (event.target as HTMLInputElement).value;
        setSearchValue(query);

        if (query.length > 0) {
            fetch(`/api/search?search=${query}`)
                .then(res => res.json())
                .then(data => {
                    setSearchResults(data)
                })
        } else {
            setSearchResults([])
        }

    }, [])

    if (props.open) {
        return (
                <Box sx={{position: `absolute`, display: `flex`, alignItems: `center`, justifyContent: `center`, top: `100%`, left: 0, right: 0, zIndex: 1000000, padding: theme.spacing(2)}}>
                    <ClickAwayListener onClickAway={() => props.setOpen(false)}>
                    <Stack sx={{width: `60%`, gap: theme.spacing(2), alignItems: `start`, backgroundColor: theme.palette.grey['100'], paddingTop: theme.spacing(2), paddingBottom: theme.spacing(2), borderRadius: `5px`, border: `1px solid ${theme.palette.grey[500]}`}}>
                        <TextField
                            value={searchValue}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchRounded sx={{color: theme.palette.grey[400]}} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setSearchValue('')} sx={{color: theme.palette.grey[700], backgroundColor: theme.palette.action.focus, padding: theme.spacing(.5)}}>
                                            <Close sx={{fontSize: `1rem`}}/>
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            sx={{...SearchStyles, width: `100%`, paddingLeft: theme.spacing(2), paddingRight: theme.spacing(2)}}
                            hiddenLabel
                            id="filled-hidden-label-small"
                            placeholder="Search"
                            variant="filled"
                            size="small"
                            onChange={(e) => handleSearch(e)}
                        />

                        <Divider sx={{width: `100%`}}/>
                        <Typography variant={'caption'} sx={{color: theme.palette.grey[700], fontWeight: 600, paddingLeft: theme.spacing(2), paddingRight: theme.spacing(2)}}>Docs</Typography>
                        <List sx={{width: `100%`, backgroundColor: `transparent`, border: `none`, maxHeight: `300px`, overflow: `scroll`}} >
                            {
                                searchResults.map((item: SearchResultItem, index: Index) => {
                                    if (item)
                                    return (
                                        <SearchListItemButton setOpen={props.setOpen} key={index} iconSrc={'/icons/docs.svg'} title={item?.data?.title ? item.data.title : "Test"} src={item.id} content={item.content}/>
                                    )
                                })
                            }
                        </List>
                    </Stack>
                    </ClickAwayListener>
                </Box>
        )
    } else {
        return <></>;
    }

}

export default SearchPopover;