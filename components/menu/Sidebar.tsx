// Sidebar Component
import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box,
    Button,
    Drawer, Icon,
    Stack,
    Typography
} from "@mui/material";
import {useTheme} from "@mui/system";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@mui/material";
import {Index} from "unist-util-visit-parents";
import {ExpandMore} from "@mui/icons-material";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import {useRouter} from "next/router";

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
                sx={{ mr: 2, display: { sm: 'none' }, position: `fixed`, top: 70, left: 25, color: theme.palette.action.active,  boxShadow: `0px 0px 15px rgba(0, 0, 0, 0.15)`, backgroundColor: theme.palette.action.hover, zIndex: 1000}}
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
                        width: `300px`,
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
            const router = useRouter();


            return (
                <Stack sx={{gap: theme.spacing(1), paddingLeft: theme.spacing(2), paddingTop: theme.spacing(3), paddingRight: theme.spacing(2), width: `100%`}}>
                    <Box sx={{display: `flex`, gap: theme.spacing(1)}}>
                        <Avatar alt="UBDC Logo" src="/icons/docs.svg" sx={{width: `35px`, height: `35px`}}/>
                        <Typography variant={'h6'} sx={{marginBottom: theme.spacing(2)}}>Docs</Typography>
                    </Box>
                    <Stack sx={{display: `flex`, gap: theme.spacing(1), width: `100%`, padding: 0}}>
                        {
                            props.fileStructure['children'].map((item: FileStructureProps, index: Index) => {
                                if (item['name'].includes('md')) {

                                    return (
                                        <Button key={index} sx={{gap: theme.spacing(2), display: `flex`, justifyContent: `space-between`, color: theme.palette.grey[100],
                                            '&:hover': {
                                                color: theme.palette.grey[900],
                                            },
                                        }} onClick={() => router.push(`/${item.path.replace('.md', '')}`)}>
                                            <Typography variant={'body2'} sx={{color: theme.palette.grey[900], textTransform: `capitalize`}}>{item.name.replace('_', ' ').replace('-', ' ').replace('.md', '')}</Typography>
                                            <ArrowForwardRoundedIcon style={{fontSize: 18}}/>
                                        </Button>
                                    )
                                } else {
                                    return (
                                        <Accordion disableGutters elevation={0} square key={index} sx={{display: `flex`, gap: theme.spacing(2),  flexDirection: `column`, padding: 0, width: `100%`,
                                            '&:before': {
                                                display: 'none',
                                            },}} >
                                            <AccordionSummary sx={{display: `flex`, justifyContent: `space-between`, padding: 0, width: `100%`}} expandIcon={<ExpandMore/>} aria-controls={`accordion-${index}`} id={`accordion-${index}-header`}>
                                            <Box sx={{backgroundColor: theme.palette.action.hover, width: `max-content`, paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1)}}>
                                                <Typography variant={'body2'} sx={{color: theme.palette.action.active, fontWeight: 500, fontFamily: `JetBrains Mono !important`, textTransform: `capitalize`}}>{item['name']}</Typography>
                                            </Box>
                                            </AccordionSummary>

                                            <AccordionDetails sx={{display: `flex`, flexDirection: `column`, padding: 0, gap: theme.spacing(2)}}>
                                            {
                                                item.children.map((innerItem: any, innerIndex: Index) => {
                                                    if (innerItem['name'].includes('md')) {
                                                        return (
                                                            <Button key={innerIndex} sx={{gap: theme.spacing(2), display: `flex`, justifyContent: `space-between`, color: theme.palette.grey[100],
                                                                '&:hover': {
                                                                    color: theme.palette.grey[900],
                                                                },
                                                            }} onClick={() => router.push(`/${innerItem.path.replace('.md', '')}`)}>
                                                                <Typography variant={'body2'} sx={{color: theme.palette.grey[900], textTransform: `capitalize`}}>{innerItem.name.replace('_', ' ').replace('-', ' ').replace('.md', '')}</Typography>
                                                                <ArrowForwardRoundedIcon style={{fontSize: 18}} />
                                                            </Button>
                                                        )
                                                    } else {
                                                        return (
                                                            <Accordion disableGutters elevation={0} square key={index} sx={{display: `flex`, gap: theme.spacing(2),  flexDirection: `column`, padding: 0, marginLeft: theme.spacing(2),
                                                                '&:before': {
                                                                    display: 'none',
                                                                },}} >
                                                                <AccordionSummary sx={{display: `flex`, justifyContent: `space-between`, padding: 0, width: `100%`}} expandIcon={<ExpandMore/>} aria-controls={`accordion-${index}`} id={`accordion-${index}-header`}>
                                                                <Box sx={{backgroundColor: theme.palette.action.hover, width: `max-content`, paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1)}}>
                                                                    <Typography variant={'body2'} sx={{color: theme.palette.action.active, fontWeight: 500, fontFamily: `JetBrains Mono !important`, textTransform: `capitalize`}}>{innerItem['name']}</Typography>
                                                                </Box>
                                                                </AccordionSummary>
                                                                <AccordionDetails sx={{display: `flex`, flexDirection: `column`, padding: 0, marginLeft: theme.spacing(2), gap: theme.spacing(2)}}>
                                                                {
                                                                    innerItem.children.map((innerInnerItem: FileStructureProps, innerInnerIndex: Index) => {
                                                                        if (innerInnerItem['name'].includes('md')) {
                                                                            return (
                                                                                <Button key={innerInnerIndex} sx={{gap: theme.spacing(2), display: `flex`, justifyContent: `space-between`, color: theme.palette.grey[100],
                                                                                    '&:hover': {
                                                                                        color: theme.palette.grey[900],
                                                                                    },

                                                                                }} onClick={() => router.push(`/${innerInnerItem.path.replace('.md', '')}`)}>
                                                                                    <Typography variant={'body2'} sx={{color: theme.palette.grey[900], textTransform: `capitalize`}}>{innerInnerItem.name.replace('_', ' ').replace('-', ' ').replace('.md', '')}</Typography>
                                                                                    <ArrowForwardRoundedIcon style={{fontSize: 18}}/>
                                                                                </Button>
                                                                            )
                                                                        }
                                                                    })
                                                                }
                                                                </AccordionDetails>

                                                            </Accordion>
                                                        )
                                                    }
                                                })
                                            }
                                            </AccordionDetails>

                                        </Accordion>
                                    )
                                }
                            })
                        }
                    </Stack>
                </Stack>
            )
}

export default Sidebar;