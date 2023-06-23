// Component to render a single document from markdown files located in root/docs
import {getAllDocPaths, getAllDocs, getDocData, getFileStructure} from "@/lib/docs";
import {ParsedUrlQuery} from "querystring";
import StandardContainer from "@/components/layouts/StandardContainer";
import BasePageComponents from "@/components/layouts/BasePageComponents";
import Head from "next/head";
import {Typography, Stack, Box, Divider} from "@mui/material";
import {useTheme} from "@mui/system";
import Sidebar from "@/components/menu/Sidebar";
import React from "react";
import {useRouter} from "next/router";
import Footer from "@/components/menu/Footer";
import {siteAuthor, siteDescription, siteKeywords} from "@/config/appConfig";

interface DocProps {
    docData: {
        id: string;
        fullPath: string;
        title: string;
        author: string;
        contentHtml: string;
        docsDirectoryContents: string | string[];
    }
    docFileStructure: Object;

}

const Doc = (props : DocProps) => {

    const doc = props.docData;
    const fileStructure = props.docFileStructure;
    const theme = useTheme();
    const router = useRouter();

    return (
        <BasePageComponents>
            <Sidebar fileStructure={fileStructure}/>
            <Head>
                <title>{doc.title}</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content={siteDescription} />
                <meta name="keywords" content={siteKeywords} />
                <meta name="author" content={siteAuthor} />
            </Head>
            <StandardContainer sidebar>
                <Stack sx={{gap: theme.spacing(2), paddingBottom: theme.spacing(8), width: `100%`, marginTop: { xs: theme.spacing(5), sm: 0 },}}>
                    <Box sx={{backgroundColor: theme.palette.action.hover, border: `1px dashed ${theme.palette.action.active}`, width: `max-content`, paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1)}}>
                        <Typography variant={'body2'} sx={{color: theme.palette.action.active, fontWeight: 500, textTransform: `capitalize`}}>{router.asPath.split('/')[2].split('#')[0]}</Typography>
                    </Box>
                    <Typography variant={'h1'}>{doc.title}</Typography>
                    <Divider component="div" sx={{width: `100%`}}/>
                    <Box sx={{display: `flex`, width: `100%`, justifyContent: `space-between`, flexWrap: `wrap`, gap: theme.spacing(1) }}>
                        <Typography variant={'caption'} sx={{color: theme.palette.grey[600]}}>{doc.fullPath.replace('.md', '')}</Typography>
                        <Typography variant={'caption'} sx={{color: theme.palette.grey[900]}}>{doc.author}</Typography>
                    </Box>

                    <div dangerouslySetInnerHTML={{ __html: doc.contentHtml }} style={{paddingBottom: theme.spacing(4), width: `100%`, display: `flex`, flexDirection: `column`, gap: theme.spacing(1)}} />
                    <Footer/>
                </Stack>
            </StandardContainer>
        </BasePageComponents>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllDocs();

    return {
        paths,
        fallback: false
    }
}

interface Params extends ParsedUrlQuery {
    id: string;
}

export async function getStaticProps({params}: Params) {
    if (params != null) {
        const docData = await getDocData(params['id']);
        const docFileStructure = await getFileStructure();
        const docPaths = await getAllDocPaths();
        return {
            props: {
                docData,
                docPaths,
                docFileStructure
            },
        };
    }
}

export default Doc;