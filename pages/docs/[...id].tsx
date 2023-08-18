// Component to render a single document from markdown files located in root/docs
import {getAllDocPaths, getAllDocs, getFileStructure} from "@/lib/docs";
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
import { serialize } from "next-mdx-remote/serialize"
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import * as fs from "fs";
import remarkPrism from "remark-prism";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import callouts from "remark-callouts";
import remarkToc from "remark-toc";
import rehypeStringify from "rehype-stringify";
import components from "@/components/markdown/ComponentMap";
import TagBlock from "@/components/markdown/TagBlock";
import rehypeMermaid from "rehype-mermaidjs";


interface DocProps {
    source:
        {
            compiledSource: MDXRemoteSerializeResult,
            frontmatter: {
                title: string;
                author: string;
                category: string;
                tags: string[];
            }
        }
    docFileStructure: Object;
}


const Doc = (props : DocProps) => {

    const fileStructure = props.docFileStructure;
    const theme = useTheme();
    const router = useRouter();
    const frontMatter = props.source.frontmatter;

    // @ts-ignore
    // @ts-ignore
    return (
        <BasePageComponents>
            <Head>
                <title>{frontMatter.title}</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content={siteDescription} />
                <meta name="keywords" content={siteKeywords} />
                <meta name="author" content={siteAuthor} />
            </Head>
            <StandardContainer sidebar>
                <Sidebar fileStructure={fileStructure}/>
                <Stack sx={{gap: theme.spacing(2), paddingBottom: theme.spacing(8), width: {md: `calc(100% - 300px)`, sm: `100%`}, marginTop: { xs: theme.spacing(5), md: 0 },}}>

                    <Box sx={{backgroundColor: theme.palette.action.hover, border: `1px dashed ${theme.palette.action.active}`, width: `max-content`, paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1)}}>
                        <Typography variant={'body2'} sx={{color: theme.palette.action.active, fontWeight: 500, textTransform: `capitalize`}}>{router.asPath.split('/')[2].split('#')[0]}</Typography>
                    </Box>
                    <Typography variant={'h1'}>{frontMatter.title}</Typography>
                    <Divider component="div" sx={{width: `100%`}}/>
                    <Stack sx={{gap: theme.spacing(2)}}>
                        <Box sx={{display: `flex`, width: `100%`, justifyContent: `space-between`, flexWrap: `wrap`, gap: theme.spacing(1) }}>
                            <Typography variant={'caption'} sx={{color: theme.palette.grey[600]}}>{window.location.href.split('/').slice(3).join('/')}</Typography>
                            <Typography variant={'caption'} sx={{color: theme.palette.grey[900]}}>{frontMatter.author}</Typography>
                        </Box>
                        <Box sx={{display: `flex`, gap: theme.spacing(1)}}>
                            {
                                frontMatter?.tags?.map((tag, index) => {
                                    return <TagBlock text={tag} key={index}/>
                                })
                            }
                        </Box>
                    </Stack>

                    {/*@ts-ignore*/}
                    <MDXRemote {...props.source} components={components} />

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

        const docFileStructure = await getFileStructure();
        const docPaths = await getAllDocPaths();
        const source = fs.readFileSync(`docs/${params['id'].join('/')}.md`)
        const mdxSource = await serialize(source, {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [rehypeStringify, rehypeMermaid],
                remarkPlugins: [[remarkPrism, {transformInlineCode: true}], remarkDirective, callouts, remarkToc, remarkGfm],
            }
        });
        return {
            props: {
                source: mdxSource,
                docPaths,
                docFileStructure,
            },
        };
    }
}

export default Doc;