// Sign In Page
import SlimContainer from "@/components/layouts/SlimContainer";
import {Typography} from "@mui/material";
import {Stack, useTheme, InputAdornment, Button} from "@mui/material";
import StyledInput from "@/components/styled/TextInput";
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import React, {useState} from "react";
import {useRouter} from "next/router";


type SignInProps = {
}

const SignIn = (props: SignInProps) => {

    const theme = useTheme();
    const router = useRouter();
    const [email, setEmail] = useState('');

    const handleEmailLogin = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Logging In')
    }

    return (
        <SlimContainer>
            <Stack sx={{alignItems: 'center', gap: theme.spacing(3),}}>
                <Typography sx={{textAlign: `center`}} variant={'h1'}>Sign In</Typography>
                <Typography sx={{textAlign: `center`, color: theme.palette.grey[600]}}>Enter your email and we’ll send you a magic link to sign in.</Typography>
                <form onSubmit={handleEmailLogin} style={{display: `flex`, flexDirection: `column`, width: `100%`, gap: theme.spacing(4)}}>
                    <StyledInput
                        sx={{minWidth: `300px`}}
                        variant={'outlined'}
                        size={'small'}
                        value={email}
                        placeholder={"name@company.com"}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(event.target.value);
                        }}
                        autoFocus
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <AlternateEmailRoundedIcon style={{color: `#AFB1B6`, fontSize: `18px`}}></AlternateEmailRoundedIcon>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button type='submit' variant={'contained'}>Continue with email</Button>
                </form>
                <Button onClick={() => router.push('/auth/create-account')} type='submit' variant={'text'} sx={{color: theme.palette.grey[700], width: `100%`}}>Create Account</Button>
            </Stack>
        </SlimContainer>
    )
}

export default SignIn;