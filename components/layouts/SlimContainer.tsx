// Slim Container Layout
import {Container} from "@mui/system";

type SlimContainerProps = {
    children: string | JSX.Element | JSX.Element[]
}

const SlimContainer = (props : SlimContainerProps) => {
    return (
        <Container sx={{maxWidth: `425px`, display: `flex`, alignContent: `center`, justifyContent: `center`, marginTop: `150px`}}>
            {props.children}
        </Container>
    )
}

export default SlimContainer;