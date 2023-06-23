import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/markdown.css';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import theme from "@/styles/theme";
import createEmotionCache from "@/utils/createEmotionCache";
import { CacheProvider, EmotionCache } from '@emotion/react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}


export default function App(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    return (

        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>

    )
}
