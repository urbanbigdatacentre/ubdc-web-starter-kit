// Core Navbar component
import {AppBar, Box, Typography, Toolbar, Avatar} from "@mui/material";
import {useTheme} from "@mui/system";
import Link from "next/link";
import {useRouter} from "next/router";
import {pathToLogo, siteTag, siteTitle} from "@/config/appConfig";
import Search from "@/components/inputs/Search";

type NavbarProps = {
    search?: boolean
}

const Navbar = (props: NavbarProps) => {

    const theme = useTheme();

    return (
        <Box sx={{position: `fixed`, width: `100%`, top: `0`, backgroundColor: theme.palette.background.paper, zIndex: 1000000}}>
            <AppBar sx={{backgroundColor: theme.palette.background.paper, borderBottom: theme.palette.grey[300], boxShadow: `none`}}/>
            <Toolbar sx={{width: `100%`, justifyContent: `space-between`, borderBottom: ` 1px solid ${theme.palette.grey[300]}`,}}>


                {/*LEFT HAND SIDE*/}

                <Box sx={{display: `flex`, alignItems: `center`, gap: theme.spacing(2)}}>
                    <Link href={'/'}>
                        {/*// Insert logo here*/}
                        <Avatar alt={'site logo'} src={pathToLogo} variant={'square'} />
                    </Link>
                    <Typography sx={{color: theme.palette.grey[800]}}>{siteTitle}</Typography>
                    {siteTag ? <Box sx={{
                        backgroundColor: theme.palette.action.hover,
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(1),
                        borderRadius: `5px`,
                        border: `1px solid ${theme.palette.action.active}`,
                        [theme.breakpoints.down('md')]: {
                            display: `none`
                        }
                    }}>
                        <Typography variant={'caption'}
                                    sx={{color: theme.palette.action.active, fontWeight: 500}}>{siteTag}</Typography>
                    </Box> : <></>}
                </Box>

                {/*RIGHT HAND SIDE*/}
                <Box sx={{display: `flex`, alignItems: `center`, gap: theme.spacing(2)}}>
                    {props.search ? <Search/> : <></>}
                </Box>


            </Toolbar>
        </Box>
    )
}

export default Navbar;