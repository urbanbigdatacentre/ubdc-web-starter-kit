// Sidebar Component
import React from "react";
import {Avatar, Box, Drawer, Stack, Typography} from "@mui/material";
import {useTheme} from "@mui/system";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@mui/material";
import {Index} from "unist-util-visit-parents";

interface SidebarProps {
    fileStructure: Object;
}

const Sidebar = (props: SidebarProps) => {

    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <Box>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' }, position: `fixed`, top: 60, left: 20, color: theme.palette.action.active, border: `1px dashed ${theme.palette.action.active}`, boxShadow: `0px 20px 50px rgba(0, 0, 0, 0.25)`, backgroundColor: theme.palette.action.hover, zIndex: 1000}}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    width: `250px`,
                    backgroundColor: theme.palette.action.white,
                    boxShadow: `0px 20px 50px rgba(0, 0, 0, 0.05)`,
                    alignItems: `start`,
                    justifyContent: `space-between`,
                    boxSizing: 'border-box',
                }}
            >
                <SideBarContent fileStructure={props.fileStructure} />
            </Drawer>
            <Drawer
                anchor={'left'}
                variant="permanent"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        display: { xs: 'none', sm: 'flex' },
                        marginTop: `64px`,
                        width: `250px`,
                        backgroundColor: theme.palette.action.white,
                        boxShadow: `0px 20px 50px rgba(0, 0, 0, 0.05)`,
                        alignItems: `start`,
                        justifyContent: `space-between`,
                        boxSizing: 'border-box',
                    }
                }}

            >
                <SideBarContent fileStructure={props.fileStructure} />
            </Drawer>
        </Box>
    )
}

interface FileStructureProps {
    path: string;
    name: string;
    children: Array<{
        path: string;
        name: string;
        children: Array<{
            path: string;
            name: string;
            children: Array<{
                path: string;
                name: string;
            }>;
        }>
    }>;
}

const SideBarContent = (props: SidebarProps) => {
            const theme = useTheme();
            return (
                <Stack sx={{gap: theme.spacing(1), paddingLeft: theme.spacing(2), paddingTop: theme.spacing(3), paddingRight: theme.spacing(10)}}>
                    <Box sx={{display: `flex`, gap: theme.spacing(1)}}>
                        <Avatar alt="UBDC Logo" src="/icons/docs.svg" sx={{width: `35px`, height: `35px`}}/>
                        <Typography variant={'h6'} sx={{marginBottom: theme.spacing(2)}}>Docs</Typography>
                    </Box>
                    <Stack sx={{display: `flex`, gap: theme.spacing(4)}}>
                        {
                            props.fileStructure['children'].map((item: FileStructureProps, index: Index) => {
                                if (item['name'].includes('md')) {

                                    return (
                                        <Box key={index}>
                                            <Link href={`/${item.path.replace('.md', '')}`}>
                                                <Typography variant={'caption'} sx={{textDecoration: `underline`, textTransform: `capitalize`}}>{item.name.replace('_', ' ').replace('-', ' ').replace('.md', '')}</Typography>
                                            </Link>
                                        </Box>
                                    )
                                } else {
                                    return (
                                        <Stack key={index} sx={{display: `flex`, gap: theme.spacing(2)}} >
                                            <Box sx={{backgroundColor: theme.palette.action.hover, border: `1px dashed ${theme.palette.action.active}`, width: `max-content`, paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1)}}>
                                                <Typography variant={'body2'} sx={{color: theme.palette.action.active, fontWeight: 500, textTransform: `capitalize`}}>{item['name']}</Typography>
                                            </Box>


                                            {
                                                item.children.map((innerItem: any, innerIndex: Index) => {
                                                    if (innerItem['name'].includes('md')) {
                                                        return (
                                                            <Box key={innerIndex} sx={{marginLeft: theme.spacing(2)}}>
                                                                <Link href={`/${innerItem.path.replace('.md', '')}`}>
                                                                    <Typography variant={'caption'} sx={{textDecoration: `underline`, textTransform: `capitalize`}}>{innerItem.name.replace('_', ' ').replace('-', ' ').replace('.md', '')}</Typography>
                                                                </Link>
                                                            </Box>
                                                        )
                                                    } else {
                                                        return (
                                                            <Stack sx={{paddingLeft: theme.spacing(2), gap: theme.spacing(1)}} key={innerIndex}>

                                                                <Typography variant={'caption'} sx={{color: theme.palette.grey[900], fontWeight: 500, textTransform: `capitalize`}}>{innerItem['name']}</Typography>

                                                                {
                                                                    innerItem.children.map((innerInnerItem: FileStructureProps, innerInnerIndex: Index) => {
                                                                        if (innerInnerItem['name'].includes('md')) {
                                                                            return (
                                                                                <Box sx={{marginLeft: theme.spacing(2)}} key={innerInnerIndex}>
                                                                                    <Link key={innerInnerIndex} href={`/${innerInnerItem?.path.replace('.md', '')}`}>
                                                                                        <Typography variant={'caption'} sx={{textDecoration: `underline`, textTransform: `capitalize` }}>{innerInnerItem.name.replace('_', ' ').replace('-', ' ').replace('.md', '')}</Typography>
                                                                                    </Link>
                                                                                </Box>
                                                                            )
                                                                        }
                                                                    })
                                                                }

                                                            </Stack>
                                                        )
                                                    }
                                                })
                                            }

                                        </Stack>
                                    )
                                }
                            })
                        }
                    </Stack>
                </Stack>
            )
}

export default Sidebar;