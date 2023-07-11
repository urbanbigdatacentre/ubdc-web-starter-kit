// Slim Container Layout
import {Container, useTheme} from "@mui/system";

type StandardContainerProps = {
    children: string | JSX.Element | JSX.Element[],
    sidebar?: boolean
}

const StandardContainer = (props : StandardContainerProps) => {
    const theme = useTheme();

    return (
        <Container sx={{ display: `flex`, width: `100%`,  overflow: `wrap`, marginTop: theme.spacing(12), marginRight: 0, marginLeft: 0,

        }}>
            {props.children}
        </Container>
    )
}

export default StandardContainer;