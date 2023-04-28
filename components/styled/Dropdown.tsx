import {Box, styled} from "@mui/material";

export const DropdownBox = styled(Box)(({theme}) => ({
    position: `absolute`,
    top: 45,
    right: 0,
    backgroundColor: theme.palette.grey[100],
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
}))