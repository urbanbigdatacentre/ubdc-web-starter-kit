// Component to render a single document from markdown files located in root/docs
import {getAllDocs, getDocData} from "@/lib/docs";
import {ParsedUrlQuery} from "querystring";
import StandardContainer from "@/components/layouts/StandardContainer";
import BasePageComponents from "@/components/layouts/BasePageComponents";
import Head from "next/head";
import {Typography, Stack, Box, Divider} from "@mui/material";
import {useTheme} from "@mui/system";
import Sidebar from "@/components/menu/Sidebar";
import Link from 'next/link';

interface DocProps {
    docData: {
        id: string;
        fullPath: string;
        title: string;
        author: string;
        contentHtml: string;
        docsDirectoryContents: string | string[];
    }

}

const Doc = (props : DocProps) => {

    const doc = props.docData;
    const theme = useTheme();

    return (
        <BasePageComponents>
            <Sidebar>
                <Stack sx={{gap: theme.spacing(1), paddingLeft: theme.spacing(2), paddingTop: theme.spacing(3)}}>
                    <Box sx={{ backgroundColor: theme.palette.action.hover, paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1), borderRadius: `5px`, border: `1px solid ${theme.palette.action.active}`, width: `fit-content` }}>
                        <Typography variant={'caption'} sx={{color: theme.palette.action.active, fontWeight: 500}}>{'Docs'}</Typography>
                    </Box>
                    {
                        doc.docsDirectoryContents && Array.isArray(doc.docsDirectoryContents) && doc.docsDirectoryContents.map((doc: string, index: number) => {
                            return (
                                <Link key={index} href={doc.replace('.md', "")}>
                                    <Typography variant={'caption'} sx={{textDecoration: `underline`, }}>{doc}</Typography>
                                </Link>
                            )
                        })
                    }
                </Stack>
            </Sidebar>
            <Head>
                <title>{doc.title}</title>
            </Head>
            <StandardContainer sidebar>
                <Stack sx={{gap: theme.spacing(1)}}>
                    <Typography variant={'h1'}>{doc.title}</Typography>
                    <Divider component="div" sx={{width: `100%`}}/>
                    <Box sx={{display: `flex`, width: `100%`, justifyContent: `space-between`, marginBottom: theme.spacing(4)}}>
                        <Typography variant={'caption'} sx={{color: theme.palette.grey[600]}}>{doc.fullPath}</Typography>
                        <Typography variant={'caption'} sx={{color: theme.palette.grey[900]}}>{doc.author}</Typography>
                    </Box>

                    <div dangerouslySetInnerHTML={{ __html: doc.contentHtml }} />
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
        const docData= await getDocData(params['id']);
        return {
            props: {
                docData,
            },
        };
    }
}

export default Doc;