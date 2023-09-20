// Mobile Nav Menu

import {alpha, Drawer, Box, Button} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import {NavProps, SideBarContent} from "@/components/menu/Sidebar";
import {useTheme} from "@mui/system";


const Hamburger = (props: NavProps) => {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box>
            <Button
                id={'hamburger-button'}
                onClick={handleDrawerToggle}
                sx={{display: { md: 'none' }, color: theme.palette.action.active, backgroundColor: `transparent`, border: `1px solid ${theme.palette.grey[300]}`, minWidth: 0,
                    '&:hover': {
                        backgroundColor: alpha('#bbdefb', .85),
                    }
                }}
            >
                <MenuIcon />
            </Button>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                PaperProps={{
                    sx: {
                        width: `250px !important`,
                        paddingTop: theme.spacing(4),
                    }
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    width: `200px`,
                    backgroundColor: theme.palette.action.white,
                    boxShadow: `0px 20px 50px rgba(0, 0, 0, 0.05)`,
                    alignItems: `start`,
                    justifyContent: `space-between`,
                    boxSizing: 'border-box',
                }}
            >
                <SideBarContent fileStructure={props.fileStructure} />
            </Drawer>
        </Box>
    )
}

export default Hamburger;