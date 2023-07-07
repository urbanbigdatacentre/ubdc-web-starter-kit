// Layout to add base page components like Navbar to all pages
import {Box} from "@mui/material";
import Navbar from "@/components/menu/Navbar";

type BasePageComponentsProps = {
    children: string | JSX.Element | JSX.Element[]
}

const BasePageComponents = (props: BasePageComponentsProps) => {
    return (
        <Box sx={{display: `flex`, alignItems: `center`}}>
            <Navbar search/>
            {props.children}
        </Box>
    )
};

export default BasePageComponents;