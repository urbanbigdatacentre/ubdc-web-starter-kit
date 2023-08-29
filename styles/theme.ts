import { createTheme } from '@mui/material/styles';
import {alpha} from "@mui/material";

const theme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: {variant: 'contained'},
                    style: {
                        fontSize: `14px !important`,
                        color: `#3793EF !important`,
                        textTransform: 'uppercase',
                        backgroundColor: `#ECF4FD`,
                        border: `1px solid #3793EF !important`,
                        boxShadow: `none !important`,
                        borderRadius: `5px !important`,
                        padding: `5px 15px 5px 15px !important`,
                        '&:hover': {
                            backgroundColor: alpha('#bbdefb', .15),
                        }
                    }
                }
            ],
        },
    },
    palette: {
        primary: {
            main: '#3793EF',
        },
        action: {
            active: '#3793EF',
            hover: '#ECF4FD',
            selected: '#0080FF',
            disabled: '#C7C8CA',
            disabledBackground: '#E2E4E7',
        },
        grey: {
            100: '#F7FAFC',
            200: '#EDF2F7',
            300: '#E2E8F0',
            400: '#CBD5E0',
            500: '#A0AEC0',
            600: '#718096',
            700: '#4A5568',
            800: '#2D3748',
            900: '#1A202C',
        }
    },
    typography: {
        allVariants: {
            fontFamily: `Poppins !important`,
        },
        h1: {
            fontSize: `40px !important`,
            color: `#2D3748 !important`,
            fontWeight: 600,
        },
        caption: {
            fontSize: `13px !important`,
            fontWeight: 300,
        },
        body1: {
            fontSize: `16px !important`,
            color: `#2D3748 !important`,
            fontWeight: 500,
        },
        body2: {
            fontSize: `15px !important`,

            fontWeight: `300 !important`,
        }
    }
});

export default theme;