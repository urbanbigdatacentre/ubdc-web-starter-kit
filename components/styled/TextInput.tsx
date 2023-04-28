// Styled Text Input Field
import {alpha, styled, TextField} from "@mui/material";


const StyledInput = styled(TextField)(({theme}) => ({
    backgroundColor: `white`,
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border:`1px solid ${theme.palette.grey[300]}`,
        },
        '&:hover fieldset': {
            borderColor: alpha(theme.palette.grey[300], 0.25),
            backgroundColor: `transparent`
        },
        '&.Mui-focused fieldset': {
            borderColor: alpha('#2979ff', .5),
        },
    },

}));

export default StyledInput;