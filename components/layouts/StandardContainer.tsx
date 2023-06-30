// Slim Container Layout
import {Container, useTheme} from "@mui/system";

type StandardContainerProps = {
    children: string | JSX.Element | JSX.Element[],
    sidebar?: boolean
}

const StandardContainer = (props : StandardContainerProps) => {
    const theme = useTheme();

    return (
        <Container sx={{ display: `flex`, width: props.sidebar ? `calc(100% - 300px)` : `100%`,  overflow: `wrap`, marginTop: theme.spacing(12), marginLeft: props.sidebar ? `325px` : 0,
            [theme.breakpoints.up("xl")]: {
                width: `calc(80% - 300px)`,
                marginRight: `300px`,
            },
            [theme.breakpoints.down("md")]: {
                marginLeft: props.sidebar ? `0`: '0',
                width: `100%`,
            },
        }}>
            {props.children}
        </Container>
    )
}

export default StandardContainer;