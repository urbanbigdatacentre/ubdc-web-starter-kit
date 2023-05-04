// Sign In Page
import SlimContainer from "@/components/layouts/SlimContainer";
import {Typography} from "@mui/material";
import {Stack, useTheme, InputAdornment, Button} from "@mui/material";
import StyledInput from "@/components/styled/TextInput";
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import React, {useState} from "react";
import {useRouter} from "next/router";
import BasePageComponents from "@/components/layouts/BasePageComponents";
import {toast, Toaster} from "react-hot-toast";
import {useSignInEmailPasswordless} from "@nhost/react";


type SignInProps = {
}

const SignIn = (props: SignInProps) => {

    const theme = useTheme();
    const router = useRouter();
    const [email, setEmail] = useState('');

    // Nhost Hook for Magic Link Sign In
    const { signInEmailPasswordless, isLoading, isSuccess, isError, error } =
        useSignInEmailPasswordless()

    const handleEmailCreateAccount = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInEmailPasswordless(email)
            .catch((error) => {
                // Getting the Error details.
                console.error(error);
                return error.message;
            })
            .then(res => {

                if (isLoading) {
                    toast.loading('Checking your details ...')
                } else if (res.isError) {
                    res.error?.message ? toast.error(res.error?.message) : toast.error("Something went wrong")
                } else if (res.isSuccess) {
                    toast.success('Check your email for the magic link.')
                }
            })
    }

    return (
        <BasePageComponents>
            <Toaster toastOptions={{
                style: {
                    fontFamily: `monospace !important`,
                },
            }}/>
            <SlimContainer>
                <Stack sx={{alignItems: 'center', gap: theme.spacing(3),}}>
                    <Typography sx={{textAlign: `center`}} variant={'h1'}>Create Account</Typography>
                    <Typography sx={{textAlign: `center`, color: theme.palette.grey[600]}}>Enter your email and we’ll send you a magic link to create an account.</Typography>
                    <form onSubmit={handleEmailCreateAccount} style={{display: `flex`, flexDirection: `column`, width: `100%`, gap: theme.spacing(4)}}>
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
                    <Button onClick={() => router.push('/auth/sign-in')} type='submit' variant={'text'} sx={{color: theme.palette.grey[700], width: `100%`, fontSize: 12}}>Sign In</Button>
                </Stack>
            </SlimContainer>
        </BasePageComponents>
    )
}

export default SignIn;