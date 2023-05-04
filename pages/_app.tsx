import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/markdown.css';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import theme from "@/styles/theme";
import {NhostApolloProvider} from "@nhost/react-apollo";
import {NhostProvider, NhostClient} from "@nhost/react";
import createEmotionCache from "@/utils/createEmotionCache";
import { CacheProvider, EmotionCache } from '@emotion/react';
import { UserProvider} from "@/UserProvider";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const nhost = new NhostClient({
    subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
    region: process.env.NEXT_PUBLIC_NHOST_REGION || ''
});

export default function App(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    return (
        <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
            <NhostApolloProvider nhost={nhost}>
                <UserProvider>
                    <CacheProvider value={emotionCache}>
                        <ThemeProvider theme={theme}>
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </CacheProvider>
                </UserProvider>
            </NhostApolloProvider>
        </NhostProvider>
    )
}
