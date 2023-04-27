import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
    },
    typography: {
        allVariants: {
            fontFamily: `Poppins !important`,
        },
    }
});

export default theme;