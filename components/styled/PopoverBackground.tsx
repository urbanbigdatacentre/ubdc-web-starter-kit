// Background for Popover component
import Box from "@mui/material/Box";
import {useTheme} from "@mui/system";


type PopoverBackgroundProps = {
    open: boolean,
    setOpen: (open: boolean) => void
}

const PopoverBackground = (props: PopoverBackgroundProps) => {

    const theme = useTheme();

    if (!props.open) {
        return <></>;
    }
    else {
        return (
            <Box  sx={{position: `absolute`, display: `flex`, alignItems: `center`, justifyContent: `center`, top: `100%`, height: `94vh`, left: 0, right: 0, width: `calc(100% - 50)`, backgroundColor: theme.palette.grey[900], opacity: `0.4`, padding: theme.spacing(2)}}>

            </Box>
        )
    }
}

export default PopoverBackground;