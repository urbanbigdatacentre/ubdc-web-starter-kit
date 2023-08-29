// File used to map custom components to Markdown Elements

import {Button, styled, Typography} from "@mui/material";
import Link from "next/link";
import React from "react";

const components = {
    h1: (props: {children: string}) => {
        return <Typography id={props.children} sx={{marginTop: `10px`}} variant={'h1'} {...props} />
    },

    a: (props: {children: string, href: string}) => {
        const isInternalLink = props.href && (props.href.startsWith('/') || props.href.startsWith('#'))
        if (isInternalLink) {
            return <LinkButton variant={'text'} onClick={() => {
                document.getElementById(props.children)?.scrollIntoView({behavior: 'smooth', block: 'center'})
            }
            }>{props.children}</LinkButton>
        } else {
            return (
                <Link href={props.href}>
                    {props.children}
                </Link>
            )
        }
    }
}

const LinkButton = styled(Button)(({theme}) => ({
    color: theme.palette.primary.main,
    textTransform: `capitalize`,
    textDecoration: `underline`,
    padding: theme.spacing(.5),
    zIndex: 9,
    width: `max-content`,
    display: `flex`,
    alignItems: `start`,
    justifyContent: `start`,
    textAlign: `left`
}))

export default components;