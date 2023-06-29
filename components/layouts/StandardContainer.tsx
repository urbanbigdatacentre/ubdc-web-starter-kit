// Slim Container Layout
import {Container, useTheme} from "@mui/system";

type StandardContainerProps = {
    children: string | JSX.Element | JSX.Element[],
    sidebar?: boolean
}

const StandardContainer = (props : StandardContainerProps) => {
    const theme = useTheme();

    return (
        <Container sx={{ display: `flex`, width: props.sidebar ? `calc(100% - 300px)` : `100%`, maxWidth: `90vh`, overflow: `wrap`, marginTop: theme.spacing(12),
            [theme.breakpoints.down("xl")]: {
                marginLeft: props.sidebar ? `300px`: '0',
                maxWidth: `none`
            },
            [theme.breakpoints.down("sm")]: {
                marginLeft: props.sidebar ? `0`: '0',
                width: `100%`,
            },
        }}>
            {props.children}
        </Container>
    )
}

export default StandardContainer;