// Core Navbar component
import {AppBar, Box, Typography, Toolbar, Button} from "@mui/material";
import RocketRoundedIcon from "@mui/icons-material/RocketRounded";
import {useTheme} from "@mui/system";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import ProfileMenu from "@/components/menu/ProfileMenu";

const Navbar = () => {

    const theme = useTheme();
    const router = useRouter();

    return (
        <Box>
            <AppBar sx={{backgroundColor: theme.palette.background.paper, borderBottom: theme.palette.grey[300], boxShadow: `none`}}/>
            <Toolbar sx={{width: `100%`, justifyContent: `space-between`, borderBottom: ` 1px solid ${theme.palette.grey[300]}`,}}>
                <Box sx={{display: `flex`, alignItems: `center`, gap: theme.spacing(4)}}>
                    <Link href={'/'}>
                        {/*// Insert logo here*/}
                        <Image src={'/ubdc-logo.png'} alt={'Insert your own logo ...'}  width={42} height={30}/>
                    </Link>
                    <Typography sx={{color: theme.palette.grey[800]}}>UBDC Web App Starter Kit</Typography>
                    <Box sx={{ backgroundColor: theme.palette.action.hover, paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1), borderRadius: `5px`, border: `1px solid ${theme.palette.action.active}` }}>
                        <Typography variant={'caption'} sx={{color: theme.palette.action.active, fontWeight: 500}}>{'Tag Me'}</Typography>
                    </Box>
                </Box>
                <Box sx={{display: `flex`, alignItems: `center`}}>
                    <Button variant={'contained'} onClick={(e) => router.push('/auth/sign-up')}>Login</Button>
                    <ProfileMenu/>
                    {/*{user && isAuthenticated ? <AvatarDropdown/> : <LogInNavButton/>}*/}
                </Box>
            </Toolbar>
        </Box>
    )
}

export default Navbar;