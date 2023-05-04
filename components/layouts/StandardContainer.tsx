// Slim Container Layout
import {Container, useTheme} from "@mui/system";

type StandardContainerProps = {
    children: string | JSX.Element | JSX.Element[],
    sidebar?: boolean
}

const StandardContainer = (props : StandardContainerProps) => {
    const theme = useTheme();

    return (
        <Container sx={{ display: `flex`, width: props.sidebar ? `calc(100% - 250px)` : `100%`, overflow: `wrap`, marginTop: theme.spacing(4), marginLeft: props.sidebar ? `250px` : 0}}>
            {props.children}
        </Container>
    )
}

export default StandardContainer;