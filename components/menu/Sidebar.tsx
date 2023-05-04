// Sidebar Component
import React from "react";
import {Drawer} from "@mui/material";
import {useTheme} from "@mui/system";
interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar = (props: SidebarProps) => {

    const theme = useTheme();

    return (

        <Drawer
            anchor={'left'}
            open={true}
            variant="permanent"
            PaperProps={{
                sx: {
                    marginTop: `64px`,
                    width: `250px`,
                    backgroundColor: theme.palette.action.white,
                    boxShadow: `0px 20px 50px rgba(0, 0, 0, 0.05)`,
                    display: `flex`,
                    alignItems: `start`,
                    justifyContent: `space-between`,
                    boxSizing: 'border-box',
                }
            }}

        >
            {props.children}
        </Drawer>
    )
}

export default Sidebar;