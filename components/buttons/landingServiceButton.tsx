// Component to render service definition on home page

import { Typography, useTheme, Radio, Stack, Avatar} from "@mui/material";
import React from "react";

interface LandingServiceButtonProps {
    service: {
        name: string,
        icon: string,
        path: string,
        description: string
    },
    handleChange: Function,
    selectedValue: string

}

const LandingServiceButton = (props: LandingServiceButtonProps) => {

    const theme = useTheme();

    return (
        <Stack sx={{border: `1px solid ${theme.palette.grey[200]}`, gap: theme.spacing(1), padding: theme.spacing(2), borderRadius: `5px`, backgroundColor: theme.palette.grey[100], width: `250px`, justifyContent: `center`, alignItems: `center`,
            '&:hover': {
                backgroundColor: theme.palette.action.hover,
                cursor: `pointer`,
                border: `1px solid ${theme.palette.action.active}`
            }
        }}
        onClick={() => props.handleChange(props.service.path)}
        >
            <Avatar variant={'circular'} sx={{width: `50px`, height: `50px`, marginBottom: theme.spacing(1), backgroundColor: theme.palette.action.hover, padding: 1}} src={props.service.icon} />
            <Typography variant={'body1'}>{props.service.name}</Typography>
            <Typography variant={'caption'} sx={{textAlign: `center`}}>{props.service.description}</Typography>
            <Radio
                checked={props.selectedValue === props.service.path}
                onChange={() => props.handleChange(props.service.path)}
                value={props.service.path}
                name="radio-buttons"
                inputProps={{ 'aria-label': props.service.path }}
            />
        </Stack>
    )
}

export default LandingServiceButton;