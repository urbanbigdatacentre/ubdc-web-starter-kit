// Component to render Profile Dropdown in Navbar
import {
    Box,
    ClickAwayListener,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
    Avatar,
    Button
} from "@mui/material";
import {DropdownBox} from "@/components/styled/Dropdown";
import {Fragment, useState} from "react";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {trimText} from "@/utils/trimText";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import {useRouter} from "next/router";
import {useSignOut, useUserData} from "@nhost/react";

const AvatarDropdown = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const router = useRouter();
    const userData = useUserData();
    const {signOut} = useSignOut();

    const handleLogOut = () => {
    }

    if (userData) {
        return (
            <Box sx={{position: `relative`}}>
                <Button onClick={() => {setMenuOpen(!menuOpen)}}>
                    <Avatar sx={{ bgcolor: theme.palette.action.active }}>
                        {userData?.email ? userData?.email.toString()[0].toUpperCase() : <></>}
                    </Avatar>
                </Button>
                {
                    menuOpen ?
                        <ClickAwayListener onClickAway={() => {setMenuOpen(false)}}>
                            <DropdownBox>
                                <List sx={{ width: '100%', maxWidth: 360, minWidth: 250, bgcolor: 'background.paper', borderRadius: (theme) => (theme.shape.borderRadius), }}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: theme.palette.action.active, fontSize: 15, height: 30, width: 30 }} variant="square">
                                                {userData?.email ? userData?.email.toString()[0].toUpperCase() : <></>}
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline', color: (theme) => (theme.palette.grey[900]) }}
                                                        component="span"
                                                        variant="caption"
                                                        noWrap={true}
                                                    >
                                                        {userData?.email ? trimText(userData?.email.toString(), 20).toUpperCase() : <></>}
                                                    </Typography>
                                                </Fragment>
                                            }
                                        />
                                    </ListItem>

                                    <Divider component="li" sx={{marginBottom: (theme) => (theme.spacing(1)), marginTop: (theme) => (theme.spacing(.5))}}/>

                                    {/*ACCOUNT SETTINGS*/}
                                    <ListItemButton component={'a'} onClick={() => router.push('/profile/settings')}>
                                        <ListItemIcon >
                                            <PersonRoundedIcon sx={{fontSize: `16px`, color: (theme) => (theme.palette.action.active), borderRadius: `20px`, backgroundColor: (theme) => (theme.palette.action.focus)}}/>
                                        </ListItemIcon>
                                        <ListItemText sx={{fontFamily: `Poppins`, ...theme.typography.caption, }} disableTypography primary="Profile Settings"/>
                                    </ListItemButton>

                                    {/*LOG OUT */}
                                    <ListItemButton onClick={() => signOut()}>
                                        <ListItemIcon>
                                            <LogoutRoundedIcon sx={{fontSize: `16px`}} color={'error'}/>
                                        </ListItemIcon>
                                        <ListItemText sx={{ color: `#d32f2f`, fontFamily: `Poppins`, ...theme.typography.caption }} disableTypography primary="Log Out"/>
                                    </ListItemButton>

                                </List>
                            </DropdownBox>
                        </ClickAwayListener>
                        :
                        <></>
                }

            </Box>
        )
    } else {
        return (
            <></>
        )
    }
}

export default AvatarDropdown;