// Slim Container Layout
import {Container, useTheme} from "@mui/system";

type SlimContainerProps = {
    children: string | JSX.Element | JSX.Element[]
}

const SlimContainer = (props : SlimContainerProps) => {

    const theme = useTheme();

    return (
        <Container sx={{maxWidth: `425px !important`, display: `flex`, alignContent: `center`, justifyContent: `center`, marginTop: theme.spacing(12)}}>
            {props.children}
        </Container>
    )
}

export default SlimContainer;